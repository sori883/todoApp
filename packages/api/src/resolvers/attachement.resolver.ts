import { Inject, UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from '@/@generated/prisma-nestjs-graphql/user/user.model';
import { UserParam } from '@/decorator/user.decorator';
import { AddAttachmentInput, UpdateAttachmentInput } from '@/dto/attachment.dto';
import { AuthGuard } from '@/guard/auth.guard';
import { AttachmentModel } from '@/models/attachment.model';
import { AttachmentService } from '@/services/attachment.service';

@Resolver()
export class AttachmentResolver {
  constructor(@Inject(AttachmentService) private AttachmentService: AttachmentService) {}

  @UseGuards(AuthGuard)
  @Query((returns) => AttachmentModel, { nullable: true })
  async findUserById(@Args('id', { type: () => Int }) id: number) {
    return await this.AttachmentService.findOneById(id);
  }

  @UseGuards(AuthGuard)
  @Query((returns) => AttachmentModel, { nullable: true })
  async findUserByPath(@Args('path', { type: () => String }) path: string) {
    return await this.AttachmentService.findOneByPath(path);
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => [AttachmentModel], { nullable: 'items' })
  async saveAttachment(@Args('attachment', { type: () => AddAttachmentInput }) attachment: AddAttachmentInput[],
    @UserParam() user: User
  ) {
    return await this.AttachmentService.save(attachment, user);
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => AttachmentModel)
  async updateAttachment(@Args('attachment') user: UpdateAttachmentInput) {
    return await this.AttachmentService.update(user);
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => AttachmentModel, { nullable: true })
  async deleteAttachyment(@Args('id', { type: () => Int }) id: number) {
    return await this.AttachmentService.delete(id);
  }
}