import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Performance Goal - CRUD Farmácia')
  .setDescription('Projeto final do Bloco 2 - Bootcamp Javascript Fullstack - Generation Brasil')
  .setContact("Tayluan de Jesus dos Santos","https://github.com/TayluanSantos/projeto_final_bloco_02","tayluanjesus0298@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
  
  process.env.TZ = '03:00';
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
  
}
bootstrap();
