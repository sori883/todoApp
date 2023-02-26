import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { AuthService } from '@/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const requestHeaders = ctx.getContext().req.headers;
    if (!requestHeaders) {
      throw new Error('ヘッダが正しく設定されていません。');
    }
    const idToken: string = requestHeaders.authorization.replace('Bearer ', '');
    try {
      // リクエストコンテキストにユーザを付与する
      const user = await this.authService.validateUser(idToken);
      ctx.getContext().req['user'] = user;
      return user !== undefined;
    } catch (error) {
      throw new UnauthorizedException('認証情報が正しくありません。');
    }
  }
}