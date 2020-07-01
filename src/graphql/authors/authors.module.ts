import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PostsModule } from '../posts/posts.module';

@Module({
  imports: [PostsModule],
  providers: [AuthorsService, AuthorsResolver],
  exports: [AuthorsResolver]
})
export class AuthorsModule {}
