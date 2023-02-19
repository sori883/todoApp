import { Field, Int, ObjectType } from '@nestjs/graphql';

import { TaskModel } from '@/models/task.model';
import { UserModel } from '@/models/user.model';

@ObjectType()
export class TasksOnUsers {
  @Field((type) => Int)
    taskIc!: number;

  @Field((type) => Int)
    userId!: number;

  @Field((type) => TaskModel)
    task!: TaskModel;

  @Field((type) => UserModel)
    user!: UserModel;
}