import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { SignatureModule } from './signature/signature.module';
import { SeanceModule } from './seance/seance.module';
import { Seance } from './seance/entities/seance.entity';
import { Signature } from './signature/entities/signature.entity';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot', 
      database: 'SoSign',
      entities: [User, Signature, Seance],
      autoLoadEntities: true,
      synchronize: true,
      driver: require('mysql2')
    }),
    UserModule,
    SignatureModule,
    SeanceModule,
    AuthModule,
  ],
})
export class AppModule {}
