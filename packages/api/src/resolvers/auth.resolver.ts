import { Inject } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AddUserInput, UpdateUserInput } from '@/dto/user.dto';
import { UserModel } from '@/models/user.model';
import { AuthService } from '@/services/auth.service';

@Resolver()
export class AuthResolver {
  constructor(@Inject(AuthService) private authService: AuthService) {}

  @Query((returns) => UserModel, { nullable: true })
  async user(@Args("id", { type: () => ID }) id: number) {
    return await this.authService.findOne(id);
  }

  @Mutation((returns) => UserModel)
  async saveUser(@Args('user') user: AddUserInput) {
    return await this.authService.save(user);
  }

  @Mutation((returns) => UserModel)
  async updateUser(@Args('user') user: UpdateUserInput) {
    return await this.authService.update(user);
  }

  @Mutation((returns) => UserModel, { nullable: true })
  async deleteUser(@Args('id', { type: () => ID }) id: number) {
    return await this.authService.delete(id);
  }
}