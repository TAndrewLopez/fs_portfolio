import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { hash } from 'bcryptjs';

import { DatabaseService } from 'src/database/database.service';
import { PrismaErrorService } from 'src/utils/prismaErrorService/prismaErrorHandler.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly prismaErrorService: PrismaErrorService,
  ) {}

  async createOne(
    data: Prisma.UserCreateInput,
  ): Promise<Omit<UserModel, 'hashedPassword'>> {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });

      if (existingUser) throw new ConflictException('Email already exists.');

      const newUser = await this.prisma.user.create({
        data: {
          ...data,
          hashedPassword: await hash(data.hashedPassword, 10),
        },
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { hashedPassword, ...user } = newUser;
      return user;
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }

  async findUnique(where: Prisma.UserWhereUniqueInput) {
    try {
      return await this.prisma.user.findUnique({ where });
    } catch (error) {
      this.prismaErrorService.handleError(error);
    }
  }
}
