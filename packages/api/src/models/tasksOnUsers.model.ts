import { Field, ID, ObjectType } from '@nestjs/graphql';

import { TaskModel } from '@/models/task.model';
import { UserModel } from '@/models/user.model';

@ObjectType()
export class TasksOnUsers {
  @Field((type) => ID)
    taskId!: number;

  @Field((type) => ID)
    userId!: number;

  @Field((type) => TaskModel)
    task!: TaskModel;

  @Field((type) => UserModel)
    user!: UserModel;
}