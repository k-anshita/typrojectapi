import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cardgames {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @Column()
    message: string;

    @Column()
    userId: number;

    @Column({ default: true })
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
