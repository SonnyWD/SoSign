import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
  console.log('validateUser email:', email);
  
  const user = await this.userService.findByEmail(email);
  if (!user) {
    console.log('User not found');
    return null;
  }

  console.log('User found:', user.email);
  const isPasswordValid = await bcrypt.compare(password, user.password);
  console.log('Password valid:', isPasswordValid);

  if (!isPasswordValid) {
    return null;
  }
  return user;
}



  async register(registerDto: RegisterDto) {
  const { email, password, prenom, nom, role } = registerDto;

  const userExists = await this.userService.findByEmail(email);
  if (userExists) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await this.userService.create({
    prenom,
    nom,
    email,
    password,
    role,
  });

  return {
    message: 'User created',
    user: {
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
    },
  };
  
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
