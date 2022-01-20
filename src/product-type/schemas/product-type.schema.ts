/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatagoryTypeDocument = CatagoryType & Document;

@Schema()
export class CatagoryType extends Document {
  @Prop({ type: String, required: true })
  catagory: string;
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: false })
  description: string;
}

export const CatagoryTypeSchema = SchemaFactory.createForClass(CatagoryType);
