import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddAttachmentInput {
  @Field(() => String, { nullable: false })
    name!: string;
  
  @Field(() => String, { nullable: false })
    path!: string;
}

@InputType()
export class UpdateAttachmentInput {
  @Field((type) => Int)
    id!: number;

  @Field(() => String, { nullable: false })
    name!: string;
  
  @Field(() => String, { nullable: false })
    path!: string;
}