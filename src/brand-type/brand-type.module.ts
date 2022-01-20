import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandTypeController } from './brand-type.controller';
import { BrandTypeService } from './brand-type.service';
import { BrandType, BrandTypeSchema } from './schema/brand-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BrandType.name, schema: BrandTypeSchema },
    ]),
  ],
  controllers: [BrandTypeController],
  providers: [BrandTypeService],
  exports: [BrandTypeService],
})
export class BrandTypeModule {}
