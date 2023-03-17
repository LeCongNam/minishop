import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserEntity } from './Entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: UserEntity) {
    try {
      const data = await this.userService.createUser(userDto);
      return {
        data,
        message: 'User is create',
        statusCode: '200',
      };
    } catch (error) {
      throw new HttpException(
        'Something  went wrong!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async getAll() {
    try {
      const [data, count] = await this.userService.getAllUser();

      return {
        data,
        message: 'Ok',
        statusCode: '200',
        pagination: {
          total: count,
        },
      };
    } catch (error) {
      throw new HttpException(
        'Something  went wrong!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async getProfile(@Param('id', ParseUUIDPipe) id: string) {
    try {
      const data = await this.userService.getOne(id);

      return {
        data,
        message: 'Ok',
        statusCode: '200',
      };
    } catch (error) {
      throw new HttpException(
        'Something  went wrong!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  async updateProfile(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() userDto: UserEntity,
  ) {
    try {
      const data = await this.userService.update(id, userDto);
      return {
        data,
        message: 'User is update',
        statusCode: '200',
      };
    } catch (error) {
      throw new HttpException(
        'Something  went wrong!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
