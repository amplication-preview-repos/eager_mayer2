import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { Retweet } from "../retweet/Retweet";
import { JsonValue } from "type-fest";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  likes?: Array<Like>;
  retweets?: Array<Retweet>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
