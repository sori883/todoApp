import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';


import { AuthModule } from '@/modules/auth.module';
import { DateScalar } from '@/scalars/date.scalar';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: 'schema.graphql',
    }),
    AuthModule
  ],
  controllers: [],
  providers: [DateScalar],
})
export class AppModule {}
