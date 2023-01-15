import { Controller, Get, Post, Put, Delete, Res } from '@nestjs/common';

@Controller('product')
export class ProductController {

    @Post('/create')
    createPost(@Res() res ){
        
    }


}
