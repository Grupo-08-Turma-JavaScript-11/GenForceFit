import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exercicios } from "./entities/exercicios.entity";



@Module({
    imports:[TypeOrmModule.forFeature([Exercicios])],
    controllers:[],
    providers:[],
    exports: [TypeOrmModule]
})
export class ExercicioModule{}