import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './createAuth';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {}
