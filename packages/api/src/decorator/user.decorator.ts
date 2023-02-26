import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { User } from '@/@generated/prisma-nestjs-graphql/user/user.model';

export const UserParam = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const gqlContext = GqlExecutionContext.create(context);
    return gqlContext.getContext().req.user;
  }
);