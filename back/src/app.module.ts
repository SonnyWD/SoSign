import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { SignatureModule } from './signature/signature.module';
import { SeanceModule } from './seance/seance.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot', 
      database: 'SoSign',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    SignatureModule,
    SeanceModule,
  ],
})
export class AppModule {}
