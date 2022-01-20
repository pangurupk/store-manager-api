/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BrandDocument = Brand & Document;

@Schema()
export class Brand extends Document {
  @Prop({ type: String, required: true })
  catagory: string;
  @Prop({ type: String, required: true })
  catagoryType: string;
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: false })
  description: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
