import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcryptjs';

import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(credentials: LoginDto) {
    const { email, password } = credentials;
    const user = await this.userService.findUnique({ email });

    if (!user && !(await compare(password, user.hashedPassword))) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { hashedPassword, ...result } = user;
    return result;
  }

  async login(credentials: LoginDto) {
    const user = await this.validateUser(credentials);

    return {
      user,
      backendToken: {
        accessToken: '',
        refreshToken: '',
      },
    };
  }

  async refreshToken(user: any) {
    return {
      user,
      backendToken: {
        accessToken: '',
        refreshToken: '',
      },
    };
  }
}
