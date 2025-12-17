import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Delete, UseGuards } from "@nestjs/common";
import { ExercicioService } from "../services/exercicio.service";
import { Exercicio } from "../entities/exercicio.entity";
import { DeleteResult } from "typeorm";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@ApiTags('Exercicio')
@Controller("/exercicio")
@ApiBearerAuth()
export class ExercicioController {
    constructor(
        private readonly exercicioService: ExercicioService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Exercicio[]> {
        return this.exercicioService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Exercicio> {
        return this.exercicioService.findById(id)
    }

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Exercicio[]> {
        return this.exercicioService.findByNome(nome)
    }

    @Get('/equipamento/:equipamento')
    @HttpCode(HttpStatus.OK)
    findByEquipamento(@Param('equipamento') equipamento: string): Promise<Exercicio[]> {
        return this.exercicioService.findByEquipamento(equipamento)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() exercicio: Exercicio): Promise<Exercicio> {
        return this.exercicioService.create(exercicio)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() exercicio: Exercicio): Promise<Exercicio> {
        return this.exercicioService.update(exercicio)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.exercicioService.delete(id)
    }

}
