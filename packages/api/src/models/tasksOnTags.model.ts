import { Field, Int, ObjectType } from '@nestjs/graphql';

import { TagModel } from '@/models/tag.model';
import { TaskModel } from '@/models/task.model';

@ObjectType('TasksOnTags')
export class TasksOnTags {
  @Field((type) => Int)
    taskId!: number;

  @Field((type) => Int)
    tagId!: number;

  @Field((type) => TaskModel)
    task!: TaskModel;

  @Field((type) => TagModel)
    tag!: TagModel;
}