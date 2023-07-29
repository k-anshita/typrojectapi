import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  message: string;

  @Column()
  email: string;

  @Column()
  subject: string;

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
