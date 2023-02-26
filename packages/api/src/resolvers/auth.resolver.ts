import { Inject, UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from '@/@generated/prisma-nestjs-graphql/user/user.model';
import { UserParam } from '@/decorator/user.decorator';
import { AddUserInput, UpdateUserInput } from '@/dto/user.dto';
import { AuthGuard } from '@/guard/auth.guard';
import { UserModel } from '@/models/user.model';
import { AuthService } from '@/services/auth.service';

@Resolver()
export class AuthResolver {
  constructor(@Inject(AuthService) private authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Query((returns) => UserModel, { nullable: false })
  async findCurrentUser(@UserParam() user: User) {
    return await this.authService.findOneByUid(user.uid);
  }

  @UseGuards(AuthGuard)
  @Query((returns) => UserModel, { nullable: true })
  async findUserById(@Args('id', { type: () => Int }) id: number) {
    return await this.authService.findOneById(id);
  }

  @Mutation((returns) => UserModel, { nullable: true })
  async saveUser(@Args('user') user: AddUserInput) {
    return await this.authService.save(user);
  }

  @Mutation((returns) => UserModel)
  async updateUser(@Args('user') user: UpdateUserInput) {
    return await this.authService.update(user);
  }

  @Mutation((returns) => UserModel, { nullable: true })
  async deleteUser(@Args('id', { type: () => Int }) id: number) {
    return await this.authService.delete(id);
  }
}