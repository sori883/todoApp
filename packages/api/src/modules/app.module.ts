import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AuthModule } from '@/modules/auth.module';
import { DateScalar } from '@/scalars/date.scalar';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.graphql',
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
    }),
    AuthModule
  ],
  controllers: [],
  providers: [DateScalar],
})
export class AppModule {}
