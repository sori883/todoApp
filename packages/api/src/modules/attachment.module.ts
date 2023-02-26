import { Module } from '@nestjs/common';

import { AttachmentResolver } from '@/resolvers/attachement.resolver';
import { AttachmentService } from '@/services/attachment.service';
import { AuthService } from '@/services/auth.service';
import { PrismaService } from '@/services/prisma.service';

@Module({
  providers: [AttachmentService, AuthService, AttachmentResolver, PrismaService],
  imports: [],
  exports: [AttachmentService],
})
export class AttachmentModule {}