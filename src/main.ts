import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swagger_api_response } from './common/swaggerApiResponse.entity';
import { ExceptionsHandlerFilter } from './common/exception-handler.filter';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.setGlobalPrefix('api');

  const httpAdapterHostRef = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionsHandlerFilter(httpAdapterHostRef));

  const config = new DocumentBuilder()
    .setTitle('APIS')
    .setVersion('1.0')
    .addServer(`http://localhost:${PORT}`)
    .addBearerAuth(
      {
        description: `Please enter token`,
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header',
      },
      'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [swagger_api_response],
  });

  SwaggerModule.setup('api-doc', app, document);
  await app.listen(PORT);
}
bootstrap();
