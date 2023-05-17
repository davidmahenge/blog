import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/auth-strategy/jwt.strategy';
import { LocalStrategy } from 'src/auth/auth-strategy/local.strategy';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: 'thisisasuperfreaksecret',
      signOptions: {
        expiresIn: '3000s',
      },
    }),
  ],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, AuthService, JwtStrategy, LocalStrategy],
})
export class UserModule {}

//@nestjs/passport passport passport-local @types/passport-local bcrypt @types/bcrypt --authentication

//@nestjs/jwt passport-jwt @types/passport-jwt --authorization
