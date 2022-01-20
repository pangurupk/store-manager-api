import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatagoryService } from './product-catagory.service';

@Controller('catagory')
export class CatagoryController {
  constructor(private catagoryService: CatagoryService) {}
  @Get()
  async getAllCatagories() {
    return await this.catagoryService.getAll();
  }
  @Get(':id')
  async getGetOneCatagory() {
    return 'one catagoty';
  }
  @Post()
  async createCatagory(@Body() body): Promise<string> {
    return await this.catagoryService.create(body);
  }
}
