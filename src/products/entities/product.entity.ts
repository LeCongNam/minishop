import { Optional } from '@nestjs/common';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './Category.entity';
import { ProductProperties } from './product_props.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Optional()
  id: string;

  @Column()
  @Index()
  p_name: string;

  @Column()
  p_desc_short: string;

  @Column()
  p_desc: string;

  @Column({
    unique: true,
  })
  p_sku: string;

  @Column({
    type: 'json',
  })
  images: string;

  @Column({
    type: 'float',
    default: 0,
  })
  p_price: number;

  @OneToOne((type) => Category, (category) => category.id)
  @JoinColumn({
    name: 'category_id',
  })
  @Optional()
  category_id: Category;

  @OneToMany(
    (type) => ProductProperties,
    (product_properties) => product_properties.product_id,
  )
  @JoinColumn({
    name: 'prod_props_id',
  })
  @Optional()
  prod_props_id: ProductProperties[];

  @Optional()
  @CreateDateColumn()
  createdDate: Date;

  @Optional()
  @UpdateDateColumn()
  updatedDate: Date;

  @Optional()
  @DeleteDateColumn()
  deletedDate: Date;
}
