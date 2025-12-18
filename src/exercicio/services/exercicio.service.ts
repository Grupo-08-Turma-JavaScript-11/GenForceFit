import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Exercicio } from '../entities/exercicio.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { ILike, Repository } from 'typeorm'
import { DeleteResult } from 'typeorm'
import { UsuarioService } from '../../usuario/service/usuario.service'
import { TipoService } from '../../tipo/service/tipo.service'


@Injectable()
export class ExercicioService {

  constructor(
    @InjectRepository(Exercicio)
    private exercicioRepository: Repository<Exercicio>,
    private usuarioService: UsuarioService,
    private tipoService: TipoService
  ) { }

  async findAll(): Promise<Exercicio[]> {
    return await this.exercicioRepository.find({
      relations: {
        usuario: true,
        tipo: true
      }
    })
  }

  async findById(id: number): Promise<Exercicio> {
    const exercicio = await this.exercicioRepository.findOne({
      where: { id },
      relations: {
        usuario: true,
        tipo: true
      }
    })

    if (!exercicio) {
      throw new HttpException("Exercício não encontrado", HttpStatus.NOT_FOUND)
    }
    return exercicio
  }

  async findByNome(nome: string): Promise<Exercicio[]> {
    return await this.exercicioRepository.find({
      where: {
        nome: ILike(`%${nome}%`)
      },
      relations: {
        usuario: true,
        tipo: true
      }
    })
  }

  async findByEquipamento(equipamento: string): Promise<Exercicio[]> {
    return await this.exercicioRepository.find({
      where: {
        equipamento: ILike(`%${equipamento}%`)
      },
      relations: {
        usuario: true,
        tipo: true
      }
    })
  }

  async create(exercicio: Exercicio): Promise<Exercicio> {

    await this.verificaExercicio(exercicio)

    return this.exercicioRepository.save(exercicio)
  }

  async update(exercicio: Exercicio): Promise<Exercicio> {

    await this.findById(exercicio.id)

    await this.verificaExercicio(exercicio)

    return this.exercicioRepository.save(exercicio)

  }

  async delete(id: number): Promise<DeleteResult> {

    const buscaExercicio: Exercicio = await this.findById(id)

    if (!buscaExercicio) {
      throw new HttpException("Exercício não encontrado", HttpStatus.NOT_FOUND)
    }

    return await this.exercicioRepository.delete(id)
  }

  async verificaExercicio(exercicio: Exercicio): Promise<void> {

    if (exercicio.usuario) {
      await this.usuarioService.findById(exercicio.usuario.id)
    }

    if (exercicio.tipo) {
      await this.tipoService.findById(exercicio.tipo.id)
    }
  }

}

