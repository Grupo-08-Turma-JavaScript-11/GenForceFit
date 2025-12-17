import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Tipo } from './Entity/Tipo.Entity'
import { TipoService } from './Service/Tipo.service'
import { TipoController } from './Controller/Tipo.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Tipo])],
  providers: [TipoService],
  controllers: [TipoController],
  exports: [TipoService],
})
export class TipoModule {}
