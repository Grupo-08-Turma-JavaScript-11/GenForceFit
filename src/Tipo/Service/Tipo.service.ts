import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository,ILike, DeleteResult } from 'typeorm'
import { Tipo } from '../Entity/Tipo.Entity'

@Injectable()
export class TipoService {

  constructor(
    @InjectRepository(Tipo)
    private tipoRepository: Repository<Tipo>
  ) {}

  async findAll(): Promise<Tipo[]> {
    return await this.tipoRepository.find({
      relations: { exercicio: true }
    })
  }

  async findById(id: number): Promise<Tipo> {
    const tipo = await this.tipoRepository.findOne({
      where: { id },
      relations: { exercicio: true }
    })

    if (!tipo) {
      throw new NotFoundException('Tipo não encontrado')
    }

    return tipo
  }

  async findByDescricao(descricao: string): Promise<Tipo[]> {
  const tipos = await this.tipoRepository.find({
    where: {
      descricao: ILike(`%${descricao}%`)
    },
    relations: { exercicio: true }
  })

  if (tipos.length === 0) {
    throw new NotFoundException('Nenhum tipo encontrado com essa descrição')
  }

  return tipos
}

async findByGrupoMuscular(grupo_muscular: string): Promise<Tipo[]> {
  const tipos = await this.tipoRepository.find({
    where: {
      grupo_muscular: ILike(`%${grupo_muscular}%`)
    },
    relations: { exercicio: true }
  })

  if (tipos.length === 0) {
    throw new NotFoundException('Nenhum tipo encontrado para esse grupo muscular')
  }

  return tipos
}


  async create(tipo: Tipo): Promise<Tipo> {
    return await this.tipoRepository.save(tipo)
  }

  async update(tipo: Tipo): Promise<Tipo> {
    await this.findById(tipo.id)
    return await this.tipoRepository.save(tipo)
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id)
    return this.tipoRepository.delete(id)
  }
}
