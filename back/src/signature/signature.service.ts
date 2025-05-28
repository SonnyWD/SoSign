import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Signature } from './entities/signature.entity';
import { Seance } from 'src/seance/entities/seance.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class SignatureService {
  constructor(
    @InjectRepository(Signature)
    private signatureRepository: Repository<Signature>,

    @InjectRepository(Seance)
    private seanceRepository: Repository<Seance>,
  ) {}

  async sign(seanceId: number, user: User): Promise<Signature> {
    const seance = await this.seanceRepository.findOne({ where: { id: seanceId.toString() } });
    if (!seance) throw new NotFoundException('Séance non trouvée');

    const alreadySigned = await this.signatureRepository.findOne({
      where: { seance: { id: seanceId.toString() }, user: { id: user.id } },
    });

    if (alreadySigned) throw new ConflictException('Déjà signé');

    const signature = this.signatureRepository.create({ seance, user });
    return this.signatureRepository.save(signature);
  }

  async getSignaturesBySeance(seanceId: number): Promise<Signature[]> {
    return this.signatureRepository.find({
      where: { seance: { id: seanceId.toString() } },
      relations: ['user'],
    });
  }
}
