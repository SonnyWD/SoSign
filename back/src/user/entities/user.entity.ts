import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { userRoles } from "../userRoles";
import { Signature } from "src/signature/entities/signature.entity";
import { Seance } from "src/seance/entities/seance.entity";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
    type: 'enum',
    enum: userRoles,
    default: userRoles.STUDENT,
    })
    role: userRoles;

    @OneToMany(() => Seance, seance => seance.createdBy)
    createdSeances: Seance[];

    @OneToMany(() => Signature, signature => signature.user)
    signatures: Signature[];
}
