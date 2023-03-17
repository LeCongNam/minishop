import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: Product) {
    try {
      return await this.productRepository.save(createProductDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll() {
    return `This action returns all products`;
  }

  async findOne(id: string) {
    try {
      const data = await this.productRepository.findOne({
        where: {
          id,
        },
        relations: ['category_id', 'prod_props_id'],
      });

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  update(id: number, updateProductDto: any) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
