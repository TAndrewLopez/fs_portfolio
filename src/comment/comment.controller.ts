import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { Comment as CommentModel } from '@prisma/client';

import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/createComment.dto';
import { UpdateCommentDto } from './dto/updateComment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createOne(
    @Body(ValidationPipe) createCommentDto: CreateCommentDto,
  ): Promise<CommentModel> {
    return this.commentService.createOne(createCommentDto);
  }

  @Get()
  async findAll(): Promise<CommentModel[]> {
    return this.commentService.findAll();
  }

  @Patch()
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateCommentDto: UpdateCommentDto,
  ): Promise<CommentModel> {
    return this.commentService.updateOne({
      where: { id },
      data: updateCommentDto,
    });
  }

  @Delete()
  async deleteOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CommentModel> {
    return this.commentService.deleteOne({ id });
  }
}
