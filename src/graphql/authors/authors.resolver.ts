import { Resolver, Query, Args } from "@nestjs/graphql";
import { AuthorsService } from "./authors.service";
import {} from '../../graphql';

@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorSerivce: AuthorsService,
    
  ) {}

  @Query('author')
  getAuthor(@Args('id') id: number) {
    return this.authorSerivce.getAuthor(id);
  }

  @Query('authors')
  getAuthors() {
    return this.authorSerivce.getAuthors();
  }
}