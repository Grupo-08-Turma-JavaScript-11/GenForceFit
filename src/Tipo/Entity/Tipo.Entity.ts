import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exercicio } from  '../../exercicio/services/exercicio.service'

@Entity({ name: "tb_tipo" })
export class Tipo {

  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  descricao: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  grupo_muscular: string;

  @OneToMany(() => Exercicio, (exercicio) => exercicio.tipo)
  @ApiProperty()
  exercicios: Exercicio[];
}
