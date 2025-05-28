import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Seance } from 'src/seance/entities/seance.entity';

@Entity('signature')
export class Signature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  signatureImage: string; 

  @Column()
  signedAt: Date;

  @ManyToOne(() => User, user => user.signatures)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Seance, seance => seance.signatures)
  @JoinColumn({ name: 'seance_id' })
  seance: Seance;
}
