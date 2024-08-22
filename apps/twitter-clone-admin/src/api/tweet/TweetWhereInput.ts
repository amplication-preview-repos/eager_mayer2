import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { RetweetListRelationFilter } from "../retweet/RetweetListRelationFilter";

export type TweetWhereInput = {
  author?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  retweets?: RetweetListRelationFilter;
};
