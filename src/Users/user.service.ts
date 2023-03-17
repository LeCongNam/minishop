import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './Entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(userDto: UserEntity) {
    try {
      return await this.userRepository.save(userDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllUser() {
    try {
      return await this.userRepository.findAndCount({
        relations: ['role_id'],
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getOne(id: string) {
    try {
      return await this.userRepository.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: string, userDto: UserEntity) {
    try {
      const user = await this.userRepository.findOne({
        where: {
          id,
        },
      });

      return await this.userRepository.save({ ...user, ...userDto });
    } catch (error) {
      console.log(error);

      throw new Error(error);
    }
  }
}
