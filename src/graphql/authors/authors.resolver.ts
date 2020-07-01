import { Resolver, Query, Args, ResolveField, Parent } from "@nestjs/graphql";
import { AuthorsService } from "./authors.service";
import {} from '../../graphql';
import { PostsService } from "../posts/posts.service";

@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorSerivce: AuthorsService,
    private postsService: PostsService
  ) {}

  @Query('author')
  getAuthor(@Args('id') id: string) {
    return this.authorSerivce.getAuthor(id);
  }

  @Query('authors')
  getAuthors() {
    return this.authorSerivce.getAuthors();
  }

  @ResolveField()
  async posts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}