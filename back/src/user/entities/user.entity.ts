import { Entity, PrimaryColumn, Column } from "typeorm";
import { userRoles } from "../userRoles";

@Entity('user')
export class User {

    @PrimaryColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    email: string;

    @Column({
    type: 'enum',
    enum: userRoles,
    default: userRoles.STUDENT,
    })
    role: userRoles;
}
