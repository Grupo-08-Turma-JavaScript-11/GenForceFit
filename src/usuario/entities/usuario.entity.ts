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
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 100, unique: true })
  @ApiProperty({example: "email@email.com.br"})
  usuario: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column({nullable: false})
  @ApiProperty()
  senha: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false})
  @ApiProperty()
  tipo: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  @ApiProperty()
  altura: number;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  @ApiProperty()
  peso: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0})
  @ApiProperty()
  IMC: number;

  @Column({ length: 45, nullable: true })
  @ApiProperty()
  foto: string;

  @ApiProperty()
  @OneToMany(() => Exercicio, exercicio => exercicio.usuario)
  exercicio: Exercicio[];
}
