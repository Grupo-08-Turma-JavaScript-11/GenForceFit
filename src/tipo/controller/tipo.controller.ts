import {
  Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put,
  UseGuards
} from '@nestjs/common'
import { TipoService } from '../service/tipo.service'
import { Tipo } from '../entities/tipo.entity'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { DeleteResult } from 'typeorm'
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard'

@UseGuards(JwtAuthGuard)
@ApiTags('Tipos')
@Controller('/tipos')
@ApiBearerAuth()
export class TipoController {

  constructor(
    private readonly tipoService: TipoService
  ) { }


  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Tipo[]> {
    return this.tipoService.findAll()
  }


  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Tipo> {
    return this.tipoService.findById(id)
  }


  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findByDescricao(@Param('descricao') descricao: string): Promise<Tipo[]> {
    return this.tipoService.findByDescricao(descricao)
  }


  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Tipo[]> {
    return this.tipoService.findByNome(nome)
  }


  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() tipo: Tipo): Promise<Tipo> {
    return this.tipoService.create(tipo)
  }


  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() tipo: Tipo): Promise<Tipo> {
    return this.tipoService.update(tipo)
  }


  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete( @Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.tipoService.delete(id)
  }
}
