import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercicio } from './entities/exercicio.entity';
import { ExercicioService } from './services/exercicio.service';
import { ExercicioController } from './controllers/exercicio.controller';
import { UsuarioModule } from '../usuario/usuarios.module';
import { GrupoMuscularModule } from '../grupoMuscular/grupoMuscular.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exercicio]),
    UsuarioModule,
    GrupoMuscularModule,
  ],
  controllers: [ExercicioController],
  providers: [ExercicioService],
  exports: [TypeOrmModule],
})
export class ExercicioModule {}
