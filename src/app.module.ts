import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';
import { AuthorsModule } from './graphql/authors/authors.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      include: [AuthorsModule],
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.ts'),
      //   // outputAs: 'class'
      // },
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      }
    }), 
    AuthorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
