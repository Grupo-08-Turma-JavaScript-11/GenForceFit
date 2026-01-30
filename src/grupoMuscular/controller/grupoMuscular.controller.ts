import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { GrupoMuscularService } from '../service/grupoMuscular.service';
import { GrupoMuscular } from '../entities/grupoMuscular.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('GrupoMuscular')
@Controller('/grupoMuscular')
@ApiBearerAuth()
export class GrupoMuscularController {
  constructor(private readonly grupoMuscularService: GrupoMuscularService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<GrupoMuscular[]> {
    return this.grupoMuscularService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<GrupoMuscular> {
    return this.grupoMuscularService.findById(id);
  }

  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findByDescricao(
    @Param('descricao') descricao: string,
  ): Promise<GrupoMuscular[]> {
    return this.grupoMuscularService.findByDescricao(descricao);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<GrupoMuscular[]> {
    return this.grupoMuscularService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() grupoMuscular: GrupoMuscular): Promise<GrupoMuscular> {
    return this.grupoMuscularService.create(grupoMuscular);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() grupoMuscular: GrupoMuscular): Promise<GrupoMuscular> {
    return this.grupoMuscularService.update(grupoMuscular);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.grupoMuscularService.delete(id);
  }
}
