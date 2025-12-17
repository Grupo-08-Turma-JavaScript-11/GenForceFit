import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Exercicio } from '../../exercicios/entities/exercicio.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('tb_usuarios')
export class Usuario {
    @PrimaryGeneratedColumn('')
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100 })
    @ApiProperty()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    @Column({ length: 100 })
    @ApiProperty({})
    usuario: string;

    @MinLength(8)
    @IsNotEmpty()
    @Column({ length: 45 })
    @ApiProperty()
    senha: string;

    @ApiProperty()
    @Column ({ length: 100 })
    tipo: string;

    @ApiProperty()
    @Column ({ length: 45 })
    altura: string;

    @ApiProperty()
    @Column ({ length: 45 })
    peso: string;    

    @ApiProperty()
    @Column ({ length: 45 })
    IMC: string;

    @ApiProperty()
    @Column ({ length: 45 })
    foto: string;

    @OneToMany(() => Exercicio, (exercicio) => exercicio.usuario)
    exercicios: Exercicio[];
}