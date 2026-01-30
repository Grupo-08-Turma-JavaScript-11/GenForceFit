import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoMuscular } from './entities/grupoMuscular.entity';
import { GrupoMuscularService } from './service/grupoMuscular.service';
import { GrupoMuscularController } from './controller/grupoMuscular.controller';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoMuscular])],
  providers: [GrupoMuscularService],
  controllers: [GrupoMuscularController],
  exports: [GrupoMuscularService],
})
export class GrupoMuscularModule {}
