import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class BlogPost {
  @Prop()
  id: number;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  author: string;
  @Prop({ required: true })
  content: string;
  @Prop({ required: true })
  publishedDate: string;
}

export const BlogPostSchema = SchemaFactory.createForClass(BlogPost);
