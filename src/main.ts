import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NextFunction, Request, Response } from "express";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
    next();
  });

  app.enableCors({
    allowedHeaders: "*",
    origin: "https://product-list-angular-eight.vercel.app",
    methods: ["POST", "PUT", "DELETE", "GET"],
    credentials: true,
  });

  await app.listen(5000);
}
bootstrap();
