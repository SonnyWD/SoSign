import { Signature } from "src/signature/entities/signature.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('seance')
export class Seance {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    date: Date;
    
    @Column()
    title: string;

    @Column()
    qrCodeData: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'created_by' })
    createdBy: User;

    @OneToMany(() => Signature, signature => signature.seance)
    signatures: Signature[];
}
