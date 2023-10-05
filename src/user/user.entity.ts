import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "src/role/role.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Role)
    @JoinColumn()
    role: Role

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    gender: string;

    @Column()
    date: Date;

    @Column()
    password: string;

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
