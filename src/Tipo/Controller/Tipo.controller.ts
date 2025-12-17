import {
  Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put
} from '@nestjs/common'
import { TipoService } from '../Service/Tipo.service'
import { Tipo } from '../Entity/Tipo.Entity'
import { ApiTags } from '@nestjs/swagger'
import { DeleteResult } from 'typeorm'

@ApiTags('Tipos')
@Controller('/tipos')
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


  @Get('/grupo-muscular/:grupo_muscular')
  @HttpCode(HttpStatus.OK)
  findByGrupoMuscular(@Param('grupo_muscular') grupo_muscular: string): Promise<Tipo[]> {
    return this.tipoService.findByGrupoMuscular(grupo_muscular)
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
