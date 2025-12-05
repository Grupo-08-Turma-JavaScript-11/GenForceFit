import { Injectable } from '@nestjs/common'
import { Exercicios } from '../entities/exercicios.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'


@Injectable()
export class ExerciciosService{

   constructor(
    @InjectRepository(Exercicios)
    private exercicioRepository: Repository<Exercicios>
   ){}

   async findAll(): Promise<Exercicios[]>{
    return await this.exercicioRepository.find()

   }
   async findById(id: number): Promise<Exercicios>{
   const exercicio = await this.exercicioRepository.findOne({
    where: {id}})
    if (!exercicio){
      throw new Error('Exercício não encontrado')
    }
    return exercicio        
   }

   async create(exercicio: Exercicios): Promise<Exercicios>{
    return await this.exercicioRepository.save(exercicio)
   }

   async update(exercicio: Exercicios): Promise<Exercicios>{
    return await this.exercicioRepository.save(exercicio)
   }

   async delete(id: number): Promise<void>{
    await this.exercicioRepository.delete(id)
   }

}

