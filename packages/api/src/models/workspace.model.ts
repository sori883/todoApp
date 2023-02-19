import { Field, Int, ObjectType } from '@nestjs/graphql';

import { AttachmentModel } from '@/models/attachment.model';
import { ProjectModel } from '@/models/project.model';
import { TagModel } from '@/models/tag.model';
import { UsersOnWorkspaces } from '@/models/usersOnWorkspaces.model';

@ObjectType()
export class WorkspaceModel {
  @Field((type) => Int)
    Id!: number;

  @Field()
    name!: string;

  @Field()
    detail?: string;

  @Field()
    createdAt!: Date;

  @Field()
    updatedAt!: Date;

  @Field((type) => [AttachmentModel])
    image?: AttachmentModel;

  @Field((type) => [TagModel])
    tags?: TagModel[];
  
  @Field((type) => [ProjectModel])
    projects?: ProjectModel[];

  @Field((type) => [UsersOnWorkspaces])
    usersOnWorkspaces!: UsersOnWorkspaces[];
}