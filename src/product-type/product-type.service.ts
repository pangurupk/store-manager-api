import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatagoryTypeDto } from './dto/product-type.dto';
import {
  CatagoryType,
  CatagoryTypeDocument,
} from './schemas/product-type.schema';

@Injectable()
export class CatagoryTypeService {
  constructor(
    @InjectModel(CatagoryType.name)
    private catagoryTypeModel: Model<CatagoryTypeDocument>,
  ) {}

  async create(catagoryTypedto: CatagoryTypeDto) {
    let createdCatagoryType;
    try {
      createdCatagoryType = new this.catagoryTypeModel(catagoryTypedto);
    } catch (error) {
      console.log(error);
    }
    return await createdCatagoryType.save();
  }
  async getAll(catagory) {
    const allCatagories = await this.catagoryTypeModel.find({
      catagory: { $eq: catagory },
    });
    return await allCatagories;
  }
}
