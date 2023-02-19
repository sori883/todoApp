import { Field, Int, ObjectType } from '@nestjs/graphql';

import { AttachmentModel } from '@/models/attachment.model';
import { CommentModel } from '@/models/comment.model';
import { ProjectModel } from '@/models/project.model';
import { TagModel } from '@/models/tag.model';
import { TaskModel } from '@/models/task.model';
import { TasksOnUsers } from '@/models/tasksOnUsers.model';
import { UsersOnWorkspaces } from '@/models/usersOnWorkspaces.model';

@ObjectType()
export class UserModel {
  @Field((type) => Int)
    id!: number;

  @Field()
    name!: string;

  @Field()
    email!: string;
  
  @Field()
    photoUrl?: string;

  @Field()
    emailVerified!: boolean;

  @Field()
    isAnonymous!: boolean;

  @Field()
    uid!: string;

  @Field()
    createdAt!: Date;

  @Field()
    updatedAt!: Date;

  @Field((type) => [TaskModel])
    tasks!: TaskModel[];
    
  @Field((type) => [CommentModel])
    comments!: CommentModel[];

  @Field((type) => [AttachmentModel])
    attachments!: AttachmentModel[];
  
  @Field((type) => [ProjectModel])
    projects!: ProjectModel[];  
    
  @Field((type) => [TagModel])
    tags!: TagModel[];

  @Field((type) => [UsersOnWorkspaces])
    usersOnWorkspaces!: UsersOnWorkspaces[];
  
  @Field((type) => [TasksOnUsers])
    tasksOnUsers?: TasksOnUsers[];
}