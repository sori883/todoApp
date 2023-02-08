import { Field, ID, ObjectType } from '@nestjs/graphql';

import { TagModel } from '@/models/tag.model';
import { TaskModel } from '@/models/task.model';

@ObjectType()
export class TasksOnTags {
  @Field((type) => ID)
    taskId!: number;

  @Field((type) => ID)
    tagId!: number;

  @Field((type) => TaskModel)
    task!: TaskModel;

  @Field((type) => TagModel)
    tag!: TagModel;
}