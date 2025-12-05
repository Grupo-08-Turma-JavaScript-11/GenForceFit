import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_Exercicios"})
export class Exercicio{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 255, nullable: false})
    nomeExercicio: string

    @IsNotEmpty()
    @Column({ length: 255, nullable: false})
    grupoMuscular: string

    @IsNotEmpty()
    @Column()
    series: number

    @IsNotEmpty()
    @Column()
    repeticoes: number

    @IsNotEmpty()
    @Column({ length: 255, nullable: false})
    nivel: string


}