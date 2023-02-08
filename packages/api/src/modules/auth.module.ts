import { Module } from '@nestjs/common';

import { AuthGuard } from '@/guard/auth.guard';
import { AuthResolver } from '@/resolvers/auth.resolver';
import { AuthService } from '@/services/auth.service';
import { PrismaService } from '@/services/prisma.service';

@Module({
  providers: [AuthService, AuthGuard, AuthResolver, PrismaService],
  imports: [],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}