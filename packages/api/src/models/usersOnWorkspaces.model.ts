import { Field, Int, ObjectType } from '@nestjs/graphql';

import { UserModel } from '@/models/user.model';
import { WorkspaceModel } from '@/models/workspace.model';

@ObjectType('UsersOnWorkspaces')
export class UsersOnWorkspaces {
  @Field((type) => Int)
    userId!: number;

  @Field((type) => Int)
    workspaceId!: number;

  @Field((type) => UserModel)
    user!: UserModel;

  @Field((type) => WorkspaceModel)
    workspace!: WorkspaceModel;
}