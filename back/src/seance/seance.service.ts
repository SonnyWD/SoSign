import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seance } from './entities/seance.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class SeanceService {
  constructor(
    @InjectRepository(Seance)
    private seanceRepository: Repository<Seance>,
  ) {}

  async create(title: string, date: Date, createdBy: User): Promise<Seance> {
    const qrCodeData = `${title}-${Date.now()}`; 
    const seance = this.seanceRepository.create({
      title,
      date,
      createdBy,
      qrCodeData,
    });
    return this.seanceRepository.save(seance);
  }

  async findAll(): Promise<Seance[]> {
    return this.seanceRepository.find();
  }

  async findOne(id: number): Promise<Seance> {
    const seance = await this.seanceRepository.findOne({ where: { id: id.toString() } });
    if (!seance) throw new NotFoundException('Séance non trouvée');
    return seance;
  }
}
