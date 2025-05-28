import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignatureService } from './signature.service';
import { SignatureController } from './signature.controller';
import { Signature } from './entities/signature.entity';  
import { Seance } from 'src/seance/entities/seance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Signature, Seance])], 
  controllers: [SignatureController],
  providers: [SignatureService],
  exports: [SignatureService],  
})
export class SignatureModule {}
