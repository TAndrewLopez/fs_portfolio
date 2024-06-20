import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { Message as MessageModel } from '@prisma/client';

import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/createMessage.dto';
import { UpdateMessageDto } from './dto/updateMessage.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async createOne(
    @Body(ValidationPipe) createMessageDto: CreateMessageDto,
  ): Promise<MessageModel> {
    return this.messageService.createOne(createMessageDto);
  }

  @Get()
  findAll(): Promise<MessageModel[]> {
    return this.messageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<MessageModel> {
    return this.messageService.findOne({ id });
  }

  @Patch(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateMessageDto: UpdateMessageDto,
  ): Promise<MessageModel> {
    return this.messageService.updateOne({
      where: { id },
      data: updateMessageDto,
    });
  }

  @Delete(':id')
  async deleteOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<MessageModel> {
    return this.messageService.deleteOne({ id });
  }
}
