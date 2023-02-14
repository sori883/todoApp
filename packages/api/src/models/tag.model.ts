import { Field, ID, ObjectType, registerEnumType  } from '@nestjs/graphql';

import { TasksOnTags } from '@/models/tasksOnTags.model';
import { UserModel } from '@/models/user.model';
import { WorkspaceModel } from '@/models/workspace.model';

export enum TagColor {
  default = 'default',
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

registerEnumType(TagColor, { name: 'TagColor' });

@ObjectType()
export class TagModel {
  @Field((type) => ID)
    id!: number;

  @Field()
    name!: string;

  @Field((type) => TagColor)
    color!: TagColor;

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