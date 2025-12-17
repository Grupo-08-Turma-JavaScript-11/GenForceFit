import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ExercicioModule } from './exercicio/exercicio.module'
import { TipoModule } from './Tipo/Tipo.module'
import { Exercicio } from './exercicio/entities/exercicio.entity'
import { Tipo } from './Tipo/Entity/Tipo.Entity'
import { Usuario } from './usuarios/entities/usuarios.entity'
import { UsuariosModule } from './usuarios/usuarios.module'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "db_genforcefit",
    entities: [Exercicio, Tipo, Usuario],
    synchronize: false,
  }),
    ExercicioModule,
    TipoModule,
    UsuariosModule],
  controllers: [],
  providers: [],
  
})
export class AppModule { }
