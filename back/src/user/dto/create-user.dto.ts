import { IsEmail, IsEnum, IsNotEmpty, IsString, IsUUID, MinLength, } from 'class-validator';
import { userRoles } from '../userRoles';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2, {message: 'Le nom doit contenir au moins 2 caractères'})
    nom: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2, {message: 'Le prénom doit contenir au moins 2 caractères '})
    prenom: string;

    @IsEmail({}, { message: 'Format d\'email invalide'})
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEnum(userRoles)
    role?: userRoles;
}
