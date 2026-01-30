import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GrupoMuscular } from '../../grupoMuscular/entities/grupoMuscular.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_exercicio' })
export class Exercicio {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  descricao: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  repeticoes: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  duracao: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 255 })
  video: string;

  @ApiProperty()
  @Column({ length: 255 })
  equipamento: string;

  @ApiProperty()
  @IsNotEmpty()
  @ManyToOne(() => Usuario, (usuario) => usuario.exercicio, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @ApiProperty()
  @IsNotEmpty()
  @ManyToOne(() => GrupoMuscular, (grupoMuscular) => grupoMuscular.exercicio, {
    onDelete: 'CASCADE',
  })
  grupoMuscular: GrupoMuscular;
}
