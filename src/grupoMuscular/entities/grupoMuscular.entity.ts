import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exercicio } from '../../exercicio/entities/exercicio.entity';

@Entity({ name: 'tb_grupomuscular' })
export class GrupoMuscular {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  descricao: string;

  @OneToMany(() => Exercicio, (exercicio) => exercicio.grupoMuscular)
  @ApiProperty()
  exercicio: Exercicio[];
}
