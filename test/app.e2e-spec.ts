import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { graphql, GraphQLSchema } from 'graphql';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // https://docs.nestjs.com/graphql/quick-start#accessing-generated-schema
    //    https://graphql.org/graphql-js/
    const { schema }: { schema: GraphQLSchema } = app.get(GraphQLSchemaHost);
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
