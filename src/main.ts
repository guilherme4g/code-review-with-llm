import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ppid } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001, "127.0.0.1");
}
bootstrap();
