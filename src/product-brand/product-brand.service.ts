import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BrandDto } from './dto/product-brand.dto';
import { Brand, BrandDocument } from './schema/product-brand.schema';

@Injectable()
export class BrandService {
  constructor(
    @InjectModel(Brand.name)
    private brandModel: Model<BrandDocument>,
  ) {}

  async create(branddto: BrandDto) {
    let createdCatagoryType;
    try {
      createdCatagoryType = new this.brandModel(branddto);
    } catch (error) {
      console.log(error);
    }
    return await createdCatagoryType.save();
  }
  async getAll(catagory, catagoryType) {
    const allCatagories = await this.brandModel.find({
      $and: [
        { catagory: { $eq: catagory } },
        { catagoryType: { $eq: catagoryType } },
      ],
    });
    return await allCatagories;
  }
}
//{ $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] }
