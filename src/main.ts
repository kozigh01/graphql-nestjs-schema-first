import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT_API || 3000;
  console.log(`Listening on port:: ${port}`);
  await app.listen(port);
}
bootstrap();
