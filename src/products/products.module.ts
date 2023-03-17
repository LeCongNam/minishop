import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/Category.entity';
import { Product } from './entities/product.entity';
import { ProductProperties } from './entities/product_props.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Product, ProductProperties])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
