import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as admin from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth';

import { AddUserInput, UpdateUserInput } from '@/dto/user.dto';
import { PrismaService } from "@/services/prisma.service";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(idToken: string): Promise<DecodedIdToken> {
    if (!idToken) {
      throw new UnauthorizedException('認証が必要です。');
    }

    try {
      return await admin.auth().verifyIdToken(idToken);
    } catch (error) {
      throw new HttpException('Forbidden', error);
    }
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async save(payload: AddUserInput) {
    return await this.prisma.user.create({ data: payload });
  }

  async update({ id, ...data }: UpdateUserInput) {
    return await this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}