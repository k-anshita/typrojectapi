import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "src/role/role.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Role)
    @JoinColumn()
    role: Role

    @Column()
    name: string;

    @Column()
    email: string;

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
