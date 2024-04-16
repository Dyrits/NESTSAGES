import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";

import { MessagesModule } from "./messages/messages.module";

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  );
  await app.listen(3000);
}

bootstrap().then(() => {
  console.info("Server is running. Use the following URL to access the API: http://localhost:3000");
});
