import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BrandTypeDto } from './dto/brand-type.dto';
import { BrandType, BrandTypeDocument } from './schema/brand-type.schema';

@Injectable()
export class BrandTypeService {
  constructor(
    @InjectModel(BrandType.name)
    private brandTypeModel: Model<BrandTypeDocument>,
  ) {}
  async creat(brandTypeDto: BrandTypeDto) {
    let createdBrandType;
    try {
      createdBrandType = new this.brandTypeModel(brandTypeDto);
    } catch (error) {
      console.log(error);
    }
    return await createdBrandType.save();
  }
  async getAll(catagory, catagoryType, brand) {
    const allCatagories = await this.brandTypeModel.find({
      $and: [
        { catagory: { $eq: catagory } },
        { catagoryType: { $eq: catagoryType } },
        { brand: { $eq: brand } },
      ],
    });
    return await allCatagories;
  }
}
