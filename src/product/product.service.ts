import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./interfaces/product.interface";
import { CreateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {

  constructor(@InjectModel("Product") readonly productModel: Model<Product>) {}

  async getProducts(): Promise<Product[]> {

    const products = await this.productModel.find();

    return products;
  }

  async getProduct(productID: string): Promise<Product> {

    const product = await this.productModel.findById(productID);

    return product;
  }

  async createProduct(createProductDTO: CreateProductDto): Promise<Product> {

    const newProduct = new this.productModel(createProductDTO);

    await newProduct.save();

    return newProduct;

  }

  async updateProduct(productID: string, createProductDTO: CreateProductDto): Promise<Product> {

    const updatedProduct = await this.productModel.findByIdAndUpdate(productID, createProductDTO, {new: true})

    return updatedProduct

  }

  async deleteProduct(productID: string): Promise<Product> {

    const deletedProduct = await this.productModel.findByIdAndDelete(productID)

    return deletedProduct

  }
}
