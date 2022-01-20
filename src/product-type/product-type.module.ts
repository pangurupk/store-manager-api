import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatagoryTypeController } from './product-type.controller';
import { CatagoryTypeService } from './product-type.service';
import {
  CatagoryType,
  CatagoryTypeSchema,
} from './schemas/product-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CatagoryType.name, schema: CatagoryTypeSchema },
    ]),
  ],
  controllers: [CatagoryTypeController],
  providers: [CatagoryTypeService],
  exports: [CatagoryTypeService],
})
export class CatagoryTypeModule {}
