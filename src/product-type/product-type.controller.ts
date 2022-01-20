import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatagoryTypeService } from './product-type.service';

@Controller('catagory-type')
export class CatagoryTypeController {
  constructor(private catagoryTypeService: CatagoryTypeService) {}
  @Get(':catagory')
  async getAllCatagories(@Param('catagory') catagory: string) {
    return await this.catagoryTypeService.getAll(catagory);
  }
  @Post()
  async createCatagory(@Body() body): Promise<string> {
    return await this.catagoryTypeService.create(body);
  }
}
