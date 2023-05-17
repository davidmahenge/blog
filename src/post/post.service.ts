import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { BlogPost } from './schema/post.schema';
import { UpdatePostDto } from './dto/update-post.dto ';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(BlogPost.name)
    private readonly blogPostModel: Model<BlogPost>,
  ) {}

  async createPost(createPostDto: CreatePostDto): Promise<BlogPost> {
    const newPostDoc = new this.blogPostModel({
      id: Date.now(),
      ...createPostDto,
    });
    return newPostDoc.save();
  }

  async getPosts(): Promise<BlogPost[]> {
    return this.blogPostModel.find();
  }

  async getPostById(id: string): Promise<BlogPost> {
    return this.blogPostModel.findById(id);
  }

  async deletePost(id: string): Promise<any> {
    return this.blogPostModel.findOneAndDelete({
      id: +id,
    });
  }

  async updatePost(
    postId: string,
    updatePostDto: UpdatePostDto,
  ): Promise<BlogPost> {
    return this.blogPostModel.findByIdAndUpdate(postId, updatePostDto, {
      new: true,
    });
  }
}
