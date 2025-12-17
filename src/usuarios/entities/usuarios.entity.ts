import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Exercicio } from '../../exercicio/entities/exercicio.entity';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@Entity('tb_usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100 })
  @ApiProperty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 100, unique: true })
  @ApiProperty()
  usuario: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column()
  @ApiProperty()
  senha: string;

  @Column({ length: 100 })
  @ApiProperty()
  tipo: string;

  @Column({ nullable: true })
  @ApiProperty()
  altura: string;

  @Column({ nullable: true })
  @ApiProperty()
  peso: string;

  @Column({ nullable: true })
  @ApiProperty()
  IMC: string;

  @Column({ nullable: true })
  @ApiProperty()
  foto: string;

  @OneToMany(() => Exercicio, exercicio => exercicio.usuario)
  exercicios: Exercicio[];
}
