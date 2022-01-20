import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatagoryDto } from './dto/product-catagory.dto';
import { Catagory, CatagoryDocument } from './schema/product-catagory.schema';

@Injectable()
export class CatagoryService {
  constructor(
    @InjectModel(Catagory.name) private catagoryModel: Model<CatagoryDocument>,
  ) {}

  async create(catagorydto: CatagoryDto) {
    let createdCatagory;
    try {
      createdCatagory = new this.catagoryModel(catagorydto);
    } catch (error) {
      console.log(error);
    }
    return await createdCatagory.save();
  }
  async getAll() {
    const allCatagories = await this.catagoryModel.find({});
    return await allCatagories;
  }
}
