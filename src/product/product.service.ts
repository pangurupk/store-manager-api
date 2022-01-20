import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from './dto/product.dto';
import { Product, ProductDocument } from './schema/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  async creat(productDto: ProductDto) {
    let createdProduct;
    try {
      createdProduct = new this.productModel(productDto);
    } catch (error) {
      console.log(error);
    }
    return await createdProduct.save();
  }
  async getAll(catagory, catagoryType, brand, brandType) {
    const allCatagories = await this.productModel.find({
      $and: [
        { catagory: { $eq: catagory } },
        { catagoryType: { $eq: catagoryType } },
        { brand: { $eq: brand } },
        { brandType: { $eq: brandType } },
      ],
    });
    return await allCatagories;
  }
}
