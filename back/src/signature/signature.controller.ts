import { Controller, Post, Param, UseGuards, Request, Get } from '@nestjs/common';
import { SignatureService } from './signature.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('signature')
export class SignatureController {
  constructor(private readonly signatureService: SignatureService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':seanceId')
  sign(@Param('seanceId') seanceId: string, @Request() req) {
    return this.signatureService.sign(+seanceId, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('seance/:seanceId')
  getSignatures(@Param('seanceId') seanceId: string) {
    return this.signatureService.getSignaturesBySeance(+seanceId);
  }
}
