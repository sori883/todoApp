import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class AddUserInput {
  @Field()
    name!: string;

  @Field()
    email!: string;

  @Field()
    emailVerified!: boolean;

  @Field()
    isAnonymous!: boolean;

  @Field()
    uid!: string;
}

@InputType()
export class UpdateUserInput {
  @Field((type) => ID)
    id!: number;

  @Field()
    name!: string;
}