/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatagoryDocument = Catagory & Document;

@Schema()
export class Catagory extends Document {
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: String, required: false })
  description: string;
}

export const CatagorySchema = SchemaFactory.createForClass(Catagory);
