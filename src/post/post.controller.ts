import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BlogPost } from './schema/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';
import { UpdatePostDto } from './dto/update-post.dto ';
//import { LoggingInterceptor } from './interceptor';

@Controller('post')
//@UseInterceptors(LoggingInterceptor)
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
  async getPostById(@Param('id') id: string): Promise<BlogPost> {
    return await this.postService.getPostById(id);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<any> {
    return await this.postService.deletePost(id);
  }

  @Patch(':id')
  async updatePost(
    @Param('id') postId: string,
    @Body()
    updatePostDto: UpdatePostDto,
  ): Promise<BlogPost> {
    return await this.postService.updatePost(postId, updatePostDto);
  }
}
