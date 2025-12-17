import { Module } from '@nestjs/common';
import { typeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './service/usuarios.service';
import { UsuariosController } from './controller/usuarios.controller';
import { Usuario } from './entities/usuario.entity';


@Module({
  imports: [typeOrmModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [typeOrmModule.forFeature([Usuario])],
})
export class UsuariosModule {}
