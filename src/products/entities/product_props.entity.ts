import { Optional } from '@nestjs/common';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity({
  name: 'product_props',
})
export class ProductProperties {
  @PrimaryColumn({
    generated: 'increment',
  })
  id: number;

  @Column()
  @Index()
  p_key: string;

  @Column()
  @Index({
    unique: true,
  })
  p_value: string;

  @ManyToOne((type) => Product, (product) => product.id)
  @JoinColumn({
    name: 'product_id',
  })
  @Optional()
  product_id: Product;

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
