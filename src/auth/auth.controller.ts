import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';

import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  async registerUser(
    @Body(ValidationPipe) data: CreateUserDto,
  ): Promise<Omit<UserModel, 'hashedPassword'>> {
    return this.userService.createOne(data);
  }

  @Post('login')
  async loginUser(@Body() credentials: LoginDto) {
    return this.authService.login(credentials);
  }

  @Post('refreshToken')
  async refreshToken() {}
}
