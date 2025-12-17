import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ExercicioModule } from './exercicio/exercicio.module'
import { TipoModule } from './Tipo/Tipo.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "hanna23",
      database: "db_genforcefit",
      autoLoadEntities: true,
      synchronize: true,
    }),
    ExercicioModule,
    TipoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
