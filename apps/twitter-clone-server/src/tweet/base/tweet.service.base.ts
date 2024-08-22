/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Tweet as PrismaTweet,
  Comment as PrismaComment,
  Like as PrismaLike,
  Retweet as PrismaRetweet,
} from "@prisma/client";

export class TweetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TweetCountArgs, "select">): Promise<number> {
    return this.prisma.tweet.count(args);
  }

  async tweets(args: Prisma.TweetFindManyArgs): Promise<PrismaTweet[]> {
    return this.prisma.tweet.findMany(args);
  }
  async tweet(args: Prisma.TweetFindUniqueArgs): Promise<PrismaTweet | null> {
    return this.prisma.tweet.findUnique(args);
  }
  async createTweet(args: Prisma.TweetCreateArgs): Promise<PrismaTweet> {
    return this.prisma.tweet.create(args);
  }
  async updateTweet(args: Prisma.TweetUpdateArgs): Promise<PrismaTweet> {
    return this.prisma.tweet.update(args);
  }
  async deleteTweet(args: Prisma.TweetDeleteArgs): Promise<PrismaTweet> {
    return this.prisma.tweet.delete(args);
  }

  async findComments(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.tweet
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comments(args);
  }

  async findLikes(
    parentId: string,
    args: Prisma.LikeFindManyArgs
  ): Promise<PrismaLike[]> {
    return this.prisma.tweet
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .likes(args);
  }

  async findRetweets(
    parentId: string,
    args: Prisma.RetweetFindManyArgs
  ): Promise<PrismaRetweet[]> {
    return this.prisma.tweet
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .retweets(args);
  }
}
