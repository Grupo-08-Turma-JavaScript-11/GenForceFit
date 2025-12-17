import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Exercicio } from '../../exercicio/entities/exercicio.entity';
import { Tipo } from '../../tipo/entities/tipo.entity';

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'db_genforcefit',
      entities: [Exercicio, Tipo, Usuario],
      synchronize: true,
    };
  }
}
