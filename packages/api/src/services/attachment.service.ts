import {
  Injectable,
} from '@nestjs/common';

import { User } from '@/@generated/prisma-nestjs-graphql/user/user.model';
import { AddAttachmentInput, UpdateAttachmentInput } from '@/dto/attachment.dto';
import { PrismaService } from '@/services/prisma.service';

@Injectable()
export class AttachmentService {
  constructor(private prisma: PrismaService) {}

  async findOneById(id: number) {
    return await this.prisma.attachment.findUnique({ where: { id } });
  }

  async findOneByPath(path: string) {
    return await this.prisma.attachment.findUnique({ where: { path }});
  }

  async save(payloads: AddAttachmentInput[], user: User) {
    const data = payloads.map((payload) => ({
      ...payload, userId: user.id
    }));
    return await this.prisma.attachment.createMany({data});
  }

  async update({ id, ...data }: UpdateAttachmentInput) {
    return await this.prisma.attachment.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await this.prisma.attachment.delete({ where: { id } });
  }
}