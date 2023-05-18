import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { BlogPost } from './schema/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';
import { UpdatePostDto } from './dto/update-post.dto ';
import { RolesGuard } from 'src/common/guard/roles.guard';
import { Roles } from 'src/common/decorator/roles.decorator';
import { Permissions } from 'src/common/decorator/permissions.decorator';
import { JwtGuard } from 'src/auth/auth-guard/jwt.guard';
import { PermissionsGuard } from 'src/common/guard/permissions.guard';
import { HttpExceptionFilter } from 'src/common/filter/global.filter';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}
  @UseGuards(JwtGuard, RolesGuard, PermissionsGuard)
  @Roles('admin')
  @Permissions('view data')
  @Post()
  async createPost(@Body() createPostDto: CreatePostDto): Promise<BlogPost> {
    return await this.postService.createPost(createPostDto);
  }
  @UseGuards(JwtGuard, RolesGuard, PermissionsGuard)
  @Roles('Admin')
  @Permissions('view files')
  @Get()
  async getPosts(): Promise<BlogPost[]> {
    return await this.postService.getPosts();
  }

  @UseFilters(new HttpExceptionFilter())
  @Get(':id')
  async getPostById(@Param('id') id: string): Promise<BlogPost> {
    const post = await this.postService.getPostById(id);
    if (!post) {
      throw new NotFoundException('Post Not Found', {
        cause: new Error(),
        description: `Post with Id: ${id} is Not Found`,
      });
    }
    return post;
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
