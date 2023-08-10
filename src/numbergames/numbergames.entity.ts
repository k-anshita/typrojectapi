import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Numbergames {
  @PrimaryGeneratedColumn()
  numberid: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User

  @Column()
  userId: number;

  @Column()
  message: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  isDeleted: boolean;

  @Column()
  createdBy: number;

  @Column()
  createdDate: Date;

  @Column({ nullable: true })
  modifyBy: number;

  @Column({ nullable: true })
  modifyDate: Date;
}
