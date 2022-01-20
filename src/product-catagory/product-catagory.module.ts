import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatagoryController } from './product-catagory.controller';
import { Catagory, CatagorySchema } from './schema/product-catagory.schema';
import { CatagoryService } from './product-catagory.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Catagory.name, schema: CatagorySchema },
    ]),
  ],
  controllers: [CatagoryController],
  providers: [CatagoryService],
  exports: [CatagoryService],
})
export class CatagoryModule {}
