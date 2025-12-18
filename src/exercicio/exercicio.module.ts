import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exercicio } from "./entities/exercicio.entity";
import { ExercicioService } from "./services/exercicio.service";
import { ExercicioController } from "./controllers/exercicio.controller";
import { UsuarioModule } from "../usuario/usuarios.module";
import { TipoModule } from "../tipo/tipo.module";



@Module({
    imports: [TypeOrmModule.forFeature([Exercicio]), UsuarioModule, TipoModule],
    controllers: [ExercicioController],
    providers: [ExercicioService],
    exports: [TypeOrmModule]
})
export class ExercicioModule { }

