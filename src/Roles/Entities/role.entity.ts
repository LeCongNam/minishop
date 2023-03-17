import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from '../../Users/Entities/user.entity';

@Entity({
  name: 'role',
})
export class RoleEntity {
  @PrimaryColumn({
    generated: 'increment',
  })
  id: number;

  @Column({
    unique: true,
  })
  name: string;

  @OneToMany((type) => UserEntity, (users) => users.role_id)
  @JoinColumn()
  users: UserEntity[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
