import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // 👇 ADD THIS LINE RIGHT HERE 👇
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalPipes(new ValidationPipe({
  whitelist: true, // Strips away properties that don't have decorators in the DTO
  forbidNonWhitelisted: true, // Throws an error if unknown properties are sent
}));
// 🟢 1. Set the global prefix for all endpoints
  app.setGlobalPrefix('api');
   // 1. Quickest fix for Development (Allows ALL domains)
  app.enableCors(); 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
