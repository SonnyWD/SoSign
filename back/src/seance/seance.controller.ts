import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { SeanceService } from './seance.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('seance')
export class SeanceController {
  constructor(private readonly seanceService: SeanceService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('TEACHER')
  @Post()
  create(@Body() body: { title: string; date: Date }, @Request() req) {
    return this.seanceService.create(body.title, body.date, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.seanceService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seanceService.findOne(+id);
  }
}
