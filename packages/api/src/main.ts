import { FirebaseApp } from '@firebase/app';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { initializeApp } from 'firebase/app';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

import { AppModule } from '@/modules/app.module';

export let firebaseApp: FirebaseApp = undefined;

async function bootstrap() {
  // bodyParserを無効化する 
  const fastifyAdapter = new FastifyAdapter();
  fastifyAdapter.getInstance().removeAllContentTypeParsers();
  fastifyAdapter
    .getInstance()
    .addContentTypeParser("*", { bodyLimit: 0 }, (_request, _payload, done) => {
      done(null, null);
    });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
    {
      bodyParser: false,
    }
  );

  app.enableCors();
  
  
  // firebase init
  const configService: ConfigService = app.get(ConfigService);
  const firebaseConfig = {
    apiKey: configService.get<string>('FIREBASE_API_KEY'),
    authDomain: configService.get<string>('FIREBASE_AUTH_DOMAIN'),
    projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
    storageBucket: configService.get<string>('FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: configService.get<string>('FIREBASE_MESSAGING_SENDER_ID'),
    appId: configService.get<string>('FIREBASE_APP_ID'),
  };
  firebaseApp = initializeApp(firebaseConfig);

  // firebase-admin init
  const adminConfig: ServiceAccount = {
    projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
    privateKey: configService
      .get<string>('FIREBASE_PRIVATE_KEY')
      .replace(/\\n/g, '\n'),
    clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
  };
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
  });

  await app.listen(3500);
  console.log("http://localhost:3500/graphql");
}
bootstrap();