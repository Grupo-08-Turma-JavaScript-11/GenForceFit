import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
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
      throw new HttpException("Exercício não encontrado", HttpStatus.NOT_FOUND)
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

    const buscaExercicio: Exercicio = await this.findById(exercicio.id)

    if(!buscaExercicio || !exercicio.id){
      throw new HttpException("Exercício não encontrado", HttpStatus.NOT_FOUND)
    }

    return await this.exercicioRepository.save(exercicio)
  }

  async delete(id: number): Promise<DeleteResult>{

    const buscaExercicio: Exercicio = await this.findById(id)

    if(!buscaExercicio){
      throw new HttpException("Exercício não encontrado", HttpStatus.NOT_FOUND)
    }

    return await this.exercicioRepository.delete(id)
  }

}

