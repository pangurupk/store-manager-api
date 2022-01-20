/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product extends Document {
  @Prop({ type: String, required: true })
  catagory: string;
  @Prop({ type: String, required: true })
  catagoryType: string;
  @Prop({ type: String, required: true })
  brand: string;
  @Prop({ type: String, required: true })
  brandType: string;
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: false })
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
