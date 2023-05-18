import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ unique: true, lowercase: true })
  username: string;
  @Prop({ select: false, required: true })
  password: string;
  @Prop({ required: true })
  role: string;
  @Prop({ required: true })
  permissions: string[];
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);
