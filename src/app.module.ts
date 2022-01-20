import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatagoryModule } from './product-catagory/product-catagory.module';
import { CatagoryTypeModule } from './product-type/product-type.module';
import { BrandModule } from './product-brand/product-brand.module';
import { ProductModule } from './product/product.module';
import { BrandTypeModule } from './brand-type/brand-type.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/StoreManager'),
    CatagoryModule,
    CatagoryTypeModule,
    BrandModule,
    ProductModule,
    BrandTypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
