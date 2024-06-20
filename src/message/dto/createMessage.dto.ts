import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  fullName: string;

  @IsString()
  subject: string;

  @IsString()
  message: string;
}
