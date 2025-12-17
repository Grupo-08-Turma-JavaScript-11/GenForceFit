import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ExercicioModule } from './exercicio/exercicio.module'
import { TipoModule } from './tipo/tipo.module'
import { Exercicio } from './exercicio/entities/exercicio.entity'
import { Tipo } from './tipo/entity/tipo.entity'
import { Usuario } from './usuarios/entities/usuarios.entity'
import { UsuarioModule } from './usuarios/usuarios.module'
import { AppController } from './app.controller'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "db_genforcefit",
    entities: [Exercicio, Tipo, Usuario],
    synchronize: false,
  }),
    ExercicioModule,
    TipoModule,
    UsuarioModule],
  controllers: [AppController],
  providers: [],
  
})
export class AppModule { }
