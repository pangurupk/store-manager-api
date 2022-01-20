import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BrandService } from './product-brand.service';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}
  @Get(':catagory/:catagoryType')
  async getAllCatagories(
    @Param('catagory') catagory: string,
    @Param('catagoryType') catagoryType: string,
  ) {
    return await this.brandService.getAll(catagory, catagoryType);
  }
  @Post()
  async createCatagory(@Body() body): Promise<string> {
    return await this.brandService.create(body);
  }
}
