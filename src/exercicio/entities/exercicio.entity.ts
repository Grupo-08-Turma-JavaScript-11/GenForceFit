import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tipo } from "../../tipo/entities/tipo.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({ name: "tb_exercicio" })
export class Exercicio {

     @ApiProperty()
     @PrimaryGeneratedColumn()
     id: number

     @ApiProperty()
     @IsNotEmpty()
     @Column({ length: 100, nullable: false })
     nome: string

     @ApiProperty()
     @IsNotEmpty()
     @Column({ length: 255, nullable: false })
     descricao: string

     @ApiProperty()
     @IsNotEmpty()
     @Column({ length: 100, nullable: false })
     repeticoes: string

     @ApiProperty()
     @IsNotEmpty()
     @Column({ length: 100, nullable: false })
     intervalo: string

     @ApiProperty()
     @IsNotEmpty()
     @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
     carga: number

     @ApiProperty()
     @Column({ length: 100 })
     equipamento: string

     @ManyToOne(() => Usuario, (usuario) => usuario.exercicio, {
          onDelete: 'CASCADE'
     })
     usuario: Usuario

     @ApiProperty()
     @ManyToOne(() => Tipo, (tipo) => tipo.exercicio, {
          onDelete: 'CASCADE'
     })
     tipo: Tipo
}