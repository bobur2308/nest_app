import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';

async function server() {
  const app = await NestFactory.create(AppModule);
  
  //global prefix
  app.setGlobalPrefix('api');

  // 🔹 Global validation pipeline
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  //swagger setup
  setupSwagger(app);

  //server
  await app.listen(process.env.PORT ?? 3000);
}
server();
