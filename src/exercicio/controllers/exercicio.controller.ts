import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Delete } from "@nestjs/common";
import { ExercicioService } from "../services/exercicio.service";
import { Exercicio } from "../entities/exercicio.entity";
import { DeleteResult } from "typeorm";


@Controller ("/exercicio")
export class ExercicioController {
    constructor (
        private readonly exercicioService: ExercicioService) { }

    @Get()
    @HttpCode (HttpStatus.OK)
    findAll(): Promise<Exercicio[]> {
        return this.exercicioService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param ('id', ParseIntPipe) id: number): Promise<Exercicio>{
        return this.exercicioService.findById(id)
    }

    @Get('/grupomuscular/:grupoMuscular')
    @HttpCode(HttpStatus.OK)
    findByGrupoMuscular(@Param('grupoMuscular') grupoMuscular: string): Promise<Exercicio[]>{
        return this.exercicioService.findByGrupoMuscular(grupoMuscular)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() exercicio: Exercicio): Promise<Exercicio>{
        return this.exercicioService.create(exercicio)
    } 

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body () exercicio: Exercicio): Promise<Exercicio>{
        return this.exercicioService.update(exercicio)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(id: number): Promise<DeleteResult> {
        return this.exercicioService.delete(id)
    }

}
