import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exercicios } from "./entities/exercicios.entity";
import { ExerciciosService } from "./services/exercicios.service";



@Module({
    imports:[TypeOrmModule.forFeature([Exercicios])],
    controllers:[],
    providers:[ExerciciosService],
    exports: [TypeOrmModule]
})
export class ExercicioModule{}

