/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RetweetWhereInput } from "./RetweetWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RetweetCountArgs {
  @ApiProperty({
    required: false,
    type: () => RetweetWhereInput,
  })
  @Field(() => RetweetWhereInput, { nullable: true })
  @Type(() => RetweetWhereInput)
  where?: RetweetWhereInput;
}

export { RetweetCountArgs as RetweetCountArgs };
