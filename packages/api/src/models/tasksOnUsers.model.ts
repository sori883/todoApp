import { Field, Int, ObjectType } from '@nestjs/graphql';

import { TaskModel } from '@/models/task.model';
import { UserModel } from '@/models/user.model';

@ObjectType('TasksOnUsers')
export class TasksOnUsers {
  @Field((type) => Int)
    taskIds!: number;

  @Field((type) => Int)
    userIds!: number;

  @Field((type) => TaskModel)
    task!: TaskModel;

  @Field((type) => UserModel)
    user!: UserModel;
}