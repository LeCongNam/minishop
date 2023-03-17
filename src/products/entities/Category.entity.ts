import { Optional } from '@nestjs/common';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Category {
  @PrimaryColumn({
    generated: 'increment',
  })
  id: number;

  @Column({
    unique: true,
  })
  c_name: string;

  @OneToMany((type) => Product, (product) => product.id)
  @JoinColumn()
  @Optional()
  products: Product[];

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
