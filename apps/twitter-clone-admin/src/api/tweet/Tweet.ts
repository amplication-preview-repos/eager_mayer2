import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { Retweet } from "../retweet/Retweet";

export type Tweet = {
  author: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  retweets?: Array<Retweet>;
  updatedAt: Date;
};
