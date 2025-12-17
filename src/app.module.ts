import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ExercicioModule } from './exercicio/exercicio.module'
import { TipoModule } from './tipo/tipo.module'
import { Exercicio } from './exercicio/entities/exercicio.entity'
import { Tipo } from './tipo/entities/tipo.entity'
import { Usuario } from './usuario/entities/usuario.entity'
import { UsuarioModule } from './usuario/usuarios.module'
import { AppController } from './app.controller'
import { UsuarioLogin } from './auth/entities/usuariologin.entity'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "db_genforcefit",
    entities: [Exercicio, Tipo, Usuario],
    synchronize: true,
  }),
    ExercicioModule,
    TipoModule,
    UsuarioModule,
    AuthModule],
  controllers: [AppController],
  providers: [],
  
})
export class AppModule { }
