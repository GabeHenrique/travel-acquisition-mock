import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('bff/travel-acquisition');
  app.enableCors({
    origin: 'http://localhost:3004',
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
