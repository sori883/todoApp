import { Field, ID, ObjectType } from '@nestjs/graphql';

import { TasksOnTags } from '@/models/tasksOnTags.model';
import { UserModel } from '@/models/user.model';
import { WorkspaceModel } from '@/models/workspace.model';

export enum Color {
  green = 'green',
  brown = 'brown',
  grey = 'grey',
  orange = 'orange',
  yellow = 'yellow',
  blue = 'blue',
  purple = 'purple',
  red = 'red',
  pink = 'pink',
  indigo = 'indigo',
}

@ObjectType()
export class TagModel {
  @Field((type) => ID)
    id!: number;

  @Field()
    name!: string;

  @Field((type) => Color)
    color?: Color;

  @Field()
    createdAt!: Date;

  @Field()
    updatedAt!: Date;
  
  @Field((type) => WorkspaceModel)
    workspace!: WorkspaceModel;
  
  @Field((type) => UserModel)
    user!: UserModel;

  @Field((type) => [TasksOnTags])
    tasksOnTags?: TasksOnTags[];
}