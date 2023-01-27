import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'https://product-list-angular-eight.vercel.app',
    credentials: true,
  });

  await app.listen(5000);
}
bootstrap();
