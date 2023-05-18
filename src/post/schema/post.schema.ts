import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import { Author } from './author.schema';

@Schema()
export class BlogPost extends Document {
  @Prop()
  id: number;

  @Prop({ required: true })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'Author' })
  author: Author;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  publishedDate: string;
}
export type BlogPostDocument = HydratedDocument<BlogPost>;
export const BlogPostSchema = SchemaFactory.createForClass(BlogPost);
