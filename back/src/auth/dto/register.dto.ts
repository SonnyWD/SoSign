import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { userRoles } from 'src/user/userRoles';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  prenom: string;

  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsEnum(userRoles)
  role?: userRoles; 
  
}
