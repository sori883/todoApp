import { Field, Int, ObjectType } from '@nestjs/graphql';

import { TaskModel } from '@/models/task.model';
import { UserModel } from '@/models/user.model';

@ObjectType('CommentModel')
export class CommentModel {
  @Field((type) => Int)
    id!: number;

  @Field()
    body!: string;

  @Field()
    createdAt!: Date;

  @Field()
    updatedAt!: Date;

  @Field((type) => TaskModel)
    task!: TaskModel;

  @Field((type) => UserModel)
    user!: UserModel;

}