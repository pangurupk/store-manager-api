import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BrandTypeService } from './brand-type.service';

@Controller('brand-type')
export class BrandTypeController {
  constructor(private brandTypeService: BrandTypeService) {}
  @Get(':catagory/:catagoryType/:brand')
  async getProducts(
    @Param('catagory') catagory: string,
    @Param('catagoryType') catagoryType: string,
    @Param('brand') brand: string,
  ) {
    return await this.brandTypeService.getAll(catagory, catagoryType, brand);
  }
  @Post()
  async createProduct(@Body() body): Promise<string> {
    return await this.brandTypeService.creat(body);
  }
}
