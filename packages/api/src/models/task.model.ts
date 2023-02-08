import { Field, ID, ObjectType } from '@nestjs/graphql';

import { AttachmentModel } from '@/models/attachment.model';
import { CommentModel } from '@/models/comment.model';
import { ProjectModel } from '@/models/project.model';
import { TasksOnTags } from '@/models/tasksOnTags.model';
import { TasksOnUsers } from '@/models/tasksOnUsers.model';
import { UserModel } from '@/models/user.model';

export enum Color {
  high = 'high',
  nomal = 'nomal',
  low = 'low',
}

@ObjectType()
export class TaskModel {
  @Field((type) => ID)
    id!: number;

  @Field()
    name!: string;

  @Field()
    detail?: string;

  @Field((type) => Color)
    color!: Color;
  
  @Field()
    startAt?: Date;

  @Field()
    limitAt?: Date;

  @Field()
    createdAt!: Date;

  @Field()
    updatedAt!: Date;

  @Field((type) => UserModel)
    user!: UserModel;

  @Field((type) => ProjectModel)
    project!: ProjectModel;
  
  @Field((type) => [CommentModel])
    comments?: CommentModel[];

  @Field((type) => [AttachmentModel])
    attachments?: AttachmentModel[];
  
  @Field((type) => [TasksOnTags])
    tasksOnTags?: TasksOnTags[];
  
  @Field((type) => [TasksOnUsers])
    tasksOnUsers?: TasksOnUsers[];
}