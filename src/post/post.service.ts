import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { posts } from 'src/database/database';
import { BlogPost } from './schema/post.schema';

@Injectable()
export class PostService {
  async createPost(createPostDto: CreatePostDto): Promise<BlogPost> {
    const newPost = {
      id: Date.now(),
      ...createPostDto,
    };
    posts.push(newPost);
    return newPost;
  }

  async getPosts(): Promise<BlogPost[]> {
    return posts;
  }

  async getPostById(id: number): Promise<BlogPost> {
    return await posts.find((post) => post.id == id);
  }

  async deletePost(id: number): Promise<BlogPost> {
    const selectedPost = posts.find((post) => post.id == id);
    posts.splice(selectedPost, 1);
    return await selectedPost;
  }
}
