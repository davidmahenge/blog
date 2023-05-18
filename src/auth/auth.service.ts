import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/schema/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userService.getUserByUsername(username);
    return user;
  }

  async generateToken(user: any): Promise<any> {
    const { role, permissions, _id, username } =
      await this.userService.getUserByUsername(user.username);
    const payload = {
      userId: _id,
      username,
      role,
      permissions,
    };
    return this.jwtService.sign(payload);
  }
}
