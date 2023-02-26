import { Field, Int, ObjectType } from '@nestjs/graphql';

import { TaskModel } from '@/models/task.model';
import { UserModel } from '@/models/user.model';
import { WorkspaceModel } from '@/models/workspace.model';

@ObjectType('AttachmentModel')
export class AttachmentModel {
  @Field((type) => Int)
    id!: number;

  @Field()
    name!: string;

  @Field()
    path!: string;

  @Field()
    createdAt!: Date;

  @Field()
    updatedAt!: Date;

  @Field((type) => TaskModel)
    task?: TaskModel;

  @Field((type) => UserModel)
    user!: UserModel;
  
  @Field((type) => WorkspaceModel)
    workspace?: WorkspaceModel;
}