import { Field, ID, ObjectType } from '@nestjs/graphql';

import { UserModel } from '@/models/user.model';
import { WorkspaceModel } from '@/models/workspace.model';

@ObjectType()
export class UsersOnWorkspaces {
  @Field((type) => ID)
    userId!: number;

  @Field((type) => ID)
    workspaceId!: number;

  @Field((type) => UserModel)
    user!: UserModel;

  @Field((type) => WorkspaceModel)
    workspace!: WorkspaceModel;
}