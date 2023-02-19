import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class AddUserInput {
  @Field(() => String, { nullable: false })
    name!: string;

  @Field(() => String, { nullable: false })
    email!: string;

  @Field(() => String, { nullable: true })
    photoUrl?: string;

  @Field(() => Boolean, { nullable: false })
    emailVerified!: boolean;

  @Field(() => Boolean, { nullable: false })
    isAnonymous!: boolean;

  @Field(() => String, { nullable: false })
    uid!: string;
}

@InputType()
export class UpdateUserInput {
  @Field((type) => Int)
    id!: number;

  @Field()
    name!: string;
}