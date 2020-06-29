import { Resolver, Query } from "@nestjs/graphql";
import { AuthorsService } from "./authors.service";
import {} from '../../graphql';

@Resolver('Author')
export class AuthorsResolver {
  constructor(
    private authorSerivce: AuthorsService,
    
  ) {}

  @Query('authors')
  getAuthors() {
    return this.authorSerivce.getAuthors();
  }
}