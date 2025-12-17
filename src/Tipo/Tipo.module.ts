import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Tipo } from './entity/tipo.entity'
import { TipoService } from './service/tipo.service'
import { TipoController } from './controller/tipo.controller'


@Module({
  imports: [TypeOrmModule.forFeature([Tipo])],
  providers: [TipoService],
  controllers: [TipoController],
  exports: [TipoService],
})
export class TipoModule {}
