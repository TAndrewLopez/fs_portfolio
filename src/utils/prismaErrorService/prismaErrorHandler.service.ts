import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class PrismaErrorService {
  handleError(error: any): void {
    if (error instanceof Prisma.PrismaClientValidationError) {
      throw new BadRequestException(
        'Failed validation. Check input data and try again.',
      );
    } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case 'P2002':
          throw new BadRequestException('Duplicate entry.');
        case 'P2025':
          throw new BadRequestException('Record was not found.');
        default:
          throw new BadRequestException(`Database error: ${error.message}`);
      }
    }

    throw new InternalServerErrorException(
      'Internal Server Error, please try again.',
    );
  }
}
