import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Res,
} from "@nestjs/common";

import { CreateProductDto } from "./dto/product.dto";

@Controller("product")
export class ProductController {
  @Post("/create")
  createPost(@Res() res, @Body() createProductDTO: CreateProductDto) {
    return res.status(HttpStatus.OK).json({
      msg: "Aca van a ir los productos",
    });
  }
}
