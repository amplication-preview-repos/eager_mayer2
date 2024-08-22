import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { RetweetCreateNestedManyWithoutTweetsInput } from "./RetweetCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  author?: string | null;
  comments?: CommentCreateNestedManyWithoutTweetsInput;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  retweets?: RetweetCreateNestedManyWithoutTweetsInput;
};
