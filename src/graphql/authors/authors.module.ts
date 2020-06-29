import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';

@Module({
  providers: [AuthorsService, AuthorsResolver],
  exports: [AuthorsResolver]
})
export class AuthorsModule {}
