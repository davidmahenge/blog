import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BlogPost } from './schema/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto): Promise<BlogPost> {
    return await this.postService.createPost(createPostDto);
  }
  @Get()
  async getPosts(): Promise<BlogPost[]> {
    return await this.postService.getPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: number): Promise<BlogPost> {
    return await this.postService.getPostById(id);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: number): Promise<BlogPost> {
    return await this.postService.deletePost(id);
  }
}
