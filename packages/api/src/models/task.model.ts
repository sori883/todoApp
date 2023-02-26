import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

import { AttachmentModel } from '@/models/attachment.model';
import { CommentModel } from '@/models/comment.model';
import { ProjectModel } from '@/models/project.model';
import { TasksOnTags } from '@/models/tasksOnTags.model';
import { UserModel } from '@/models/user.model';

export enum TaskPriority {
  high = 'high',
  nomal = 'nomal',
  low = 'low',
}

registerEnumType(TaskPriority, { name: 'TaskPriority' });

@ObjectType('TaskModel')
export class TaskModel {
  @Field((type) => Int)
    id!: number;

  @Field()
    name!: string;

  @Field()
    detail?: string;

  @Field((type) => TaskPriority)
    priority!: TaskPriority;
  
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
  
  @Field((type) => CommentModel)
    comments?: CommentModel[];

  @Field((type) => AttachmentModel)
    attachments?: AttachmentModel[];
  
  @Field((type) => [TasksOnTags])
    tags?: TasksOnTags[];
  
  @Field((type) => UserModel)
    userAssign?: UserModel[];
}