import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './auth-strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './auth-strategy/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'thisissuperfreaksecret',
      signOptions: { expiresIn: '3000s' },
    }),
    UserModule,
  ],
  exports: [AuthService],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
