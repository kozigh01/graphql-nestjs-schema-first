import { Injectable } from '@nestjs/common';
import { Post } from '../../graphql';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [
    { id: "101", authorId: "1", title: "Post 1", votes: 11 },
    { id: "102", authorId: "2", title: "Post 2", votes: 22 },
    { id: "103", authorId: "3", title: "Post 3", votes: 33 },
    { id: "104", authorId: "4", title: "Post 4", votes: 44 },
  ];

  findAll({ authorId }) {
    if (authorId) {
      return this.posts.filter(p => p.authorId === authorId );
    };

    return this.posts;
  }
}
