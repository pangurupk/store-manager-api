/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BrandTypeDocument = BrandType & Document;

@Schema()
export class BrandType extends Document {
  @Prop({ type: String, required: true })
  catagory: string;
  @Prop({ type: String, required: true })
  catagoryType: string;
  @Prop({ type: String, required: true })
  brand: string;
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: false })
  description: string;
}

export const BrandTypeSchema = SchemaFactory.createForClass(BrandType);
