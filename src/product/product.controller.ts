import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  NotFoundException,
  Post,
  Put,
  Res,
  Query,
} from "@nestjs/common";

import { CreateProductDto } from "./dto/product.dto";

import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {

  constructor(private productService: ProductService) {}

  // Crear un producto

  @Post("/create")
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDto) {
    const product = await this.productService.createProduct(createProductDTO);
    return res.status(HttpStatus.OK).json({
      msg: "PRODUCTO CREADO",
      data: product,
    });
  }

  // Obtener lista de productos

  @Get('/')
  async getProducts (@Res() res) {
    const products = await this.productService.getProducts()
    return res.status(HttpStatus.OK).json({
      data: products,
    });
  }

  // Obtener un producto por ID

  @Get('/:id')
  async getProduct (@Res() res, @Param('id') productID) {

    const product = await this.productService.getProduct(productID)

    if(!product) throw new NotFoundException('Producto inexistente')

    return res.status(HttpStatus.OK).json({
      data: product,
    });
  }

  // Editar producto 

  @Put('/update')
  async updateProduct (@Res() res, @Body() createProductDto: CreateProductDto, @Query('productID') productID) {
    
    const productEdited = await this.productService.updateProduct(productID, createProductDto)

    if(!productEdited) throw new NotFoundException('Producto inexistente')

    return res.status(HttpStatus.OK).json({
      msg: "PRODUCTO EDITADO",
      data: productEdited,
    });

  }

  // Eliminar Producto

  @Delete('/delete')
  async deleteProduct (@Res() res, @Query('productID') productID) {
    
    const productDeleted = await this.productService.deleteProduct(productID)

    if(!productDeleted) throw new NotFoundException('Producto inexistente')

    return res.status(HttpStatus.OK).json({
      message: "PRODUCTO ELIMINAOD",
      data: productDeleted
    });
  }


}
