import { IsEmail, IsEnum, IsString, MinLength, } from 'class-validator';
import { userRoles } from '../userRoles';

export class CreateUserDto {
    @IsString()
    id: string;

    @IsString()
    @MinLength(2, {message: 'Le nom doit contenir au moins 2 caractères'})
    nom: string;

    @IsString()
    @MinLength(2, {message: 'Le prénom doit contenir au moins 2 caractères '})
    prenom: string;

    @IsEmail({}, { message: 'Format d\'email invalide'})
    email: string;

    @IsEnum(userRoles)
    role: userRoles;
}
