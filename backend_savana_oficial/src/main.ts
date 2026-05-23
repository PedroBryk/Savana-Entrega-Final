import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true,
  });

  app.useStaticAssets(join(__dirname, '..', 'upload'), {
    prefix: '/upload',
  });

  const config = new DocumentBuilder()
    .setTitle('Savana Pet Café - API')
    .setDescription('Documentação oficial das rotas de adoção e cardápio do Savana.')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();