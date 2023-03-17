import { Optional } from '@nestjs/common';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleEntity } from '../../Roles/Entities/role.entity';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    unique: true,
  })
  phone: string;

  @Column({
    unique: true,
  })
  username: string;

  @OneToOne((type) => RoleEntity, (role) => role.id)
  @JoinColumn({
    name: 'role_id',
  })
  @Optional()
  role_id: RoleEntity;

  @Column({
    default: false,
  })
  @Optional()
  isActive: boolean;

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
