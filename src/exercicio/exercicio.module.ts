import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exercicio } from "./entities/exercicio.entity";
import { ExercicioService } from "./services/exercicio.service";
import { ExercicioController } from "./controllers/exercicio.controller";
import { UsuarioModule } from "../usuario/usuarios.module";
import { TipoModule } from "../tipo/tipo.module";
import { UsuarioService } from "../usuario/service/usuario.service";
import { TipoService } from "../tipo/service/tipo.service";



@Module({
    imports: [TypeOrmModule.forFeature([Exercicio]), UsuarioModule, TipoModule],
    controllers: [ExercicioController],
    providers: [ExercicioService],
    exports: [TypeOrmModule]
})
export class ExercicioModule { }

