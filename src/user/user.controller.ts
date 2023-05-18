import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';
import { JwtGuard } from 'src/auth/auth-guard/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Get()
  async getUserByEmail(@Req() req): Promise<User> {
    return this.userService.getUserByUsername(req.user['username']);
  }
}
