import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';


import { AttachmentModule } from '@/modules/attachment.module';
import { AuthModule } from '@/modules/auth.module';
import { DateScalar } from '@/scalars/date.scalar';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      graphiql: process.env.NODE_ENV !== 'production',
      autoSchemaFile: 'schema.graphql',
      sortSchema: true,
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [DateScalar],
})
export class AppModule {}
