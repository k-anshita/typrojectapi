import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cardgames {
    @PrimaryGeneratedColumn()
    cardid: number;

    @ManyToOne(() => User, { cascade: true, onDelete: 'CASCADE' })
    @JoinColumn()
    user: User

    @Column()
    message: string;

    @Column()
    userId: number;

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
