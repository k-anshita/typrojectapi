import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Numbergames {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  email: string;

  @Column({default:true})
  iswin: boolean;

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
