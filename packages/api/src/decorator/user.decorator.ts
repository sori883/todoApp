import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { DecodedIdToken } from "firebase-admin/lib/auth";

export const UserParam = createParamDecorator(
  (data: unknown, context: ExecutionContext): DecodedIdToken => {
    const gqlContext = GqlExecutionContext.create(context);
    return gqlContext.getContext().req.user;
  }
);