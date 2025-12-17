import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercicio } from './exercicio/entities/exercicio.entity';
import { ExercicioModule } from './exercicio/exercicio.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "db_genforcefit",
    entities: [Exercicio],
    synchronize: false,
  }),
  UsuariosModule,
  ExercicioModule],
  controllers: [],
  providers: [],
  
})
export class AppModule {}
