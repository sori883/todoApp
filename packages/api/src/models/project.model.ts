import { Field, Int, ObjectType } from '@nestjs/graphql';

import { TaskModel } from '@/models/task.model';
import { UserModel } from '@/models/user.model';
import { WorkspaceModel } from '@/models/workspace.model';

@ObjectType()
export class ProjectModel {
  @Field((type) => Int)
    id!: number;

  @Field()
    name!: string;

  @Field()
    detail?: string;

  @Field()
    createdAt!: Date;

  @Field()
    updatedAt!: Date;

  @Field((type) => WorkspaceModel)
    workspace!: WorkspaceModel;

  @Field((type) => UserModel)
    user!: UserModel;

  @Field((type) => TaskModel)
    task?: TaskModel[];
}