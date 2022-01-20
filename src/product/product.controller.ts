import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get(':catagory/:catagoryType/:brand/:brandType')
  async getProducts(
    @Param('catagory') catagory: string,
    @Param('catagoryType') catagoryType: string,
    @Param('brand') brand: string,
    @Param('brandType') brandType: string,
  ) {
    console.log(catagoryType);
    return await this.productService.getAll(
      catagory,
      catagoryType,
      brand,
      brandType,
    );
  }
  @Post()
  async createProduct(@Body() body): Promise<string> {
    return await this.productService.creat(body);
  }
}
