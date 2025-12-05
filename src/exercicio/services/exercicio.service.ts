import { Injectable } from '@nestjs/common'
import { Exercicio } from '../entities/exercicio.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { ILike, Repository } from 'typeorm'
import { DeleteResult } from 'typeorm'


@Injectable()
export class ExercicioService{

   constructor(
    @InjectRepository(Exercicio)
    private exercicioRepository: Repository<Exercicio>
   ){}

   async findAll(): Promise<Exercicio[]>{
    return await this.exercicioRepository.find()

   }
   async findById(id: number): Promise<Exercicio>{
   const exercicio = await this.exercicioRepository.findOne({
    where: {id}})
    if (!exercicio){
      throw new Error('Exercício não encontrado')
    }
    return exercicio        
   }

   async findByGrupoMuscular(grupoMuscular : string) : Promise<Exercicio[]>{
    return await this.exercicioRepository.find({
      where: {
        grupoMuscular: ILike(`%${grupoMuscular}%`)
      }
    })
   }

   async findByNomeExercicio(nomeExercicio : string) : Promise<Exercicio[]>{
    return await this.exercicioRepository.find({
      where: {
        nomeExercicio: ILike(`%${nomeExercicio}%`)
      }
    })
   }

   async findByNivel(nivel : string) : Promise<Exercicio[]>{
    return await this.exercicioRepository.find({
      where: {
        nivel: ILike(`%${nivel}%`)
      }
    })
   }

   async create(exercicio: Exercicio): Promise<Exercicio>{
    return await this.exercicioRepository.save(exercicio)
   }

   async update(exercicio: Exercicio): Promise<Exercicio>{
    return await this.exercicioRepository.save(exercicio)
   }

   async delete(id: number): Promise<DeleteResult>{
    return await this.exercicioRepository.delete(id)
   }

}

