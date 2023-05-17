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

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.getUserByUsername(email);
    return user;
  }

  async generateToken(user: any): Promise<any> {
    const payload = {
      username: user.email,
      sub: user.id,
    }; //get identity , roles and permission from the database/file
    return this.jwtService.sign(payload);
  }
}
