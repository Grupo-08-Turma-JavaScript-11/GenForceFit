import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike, DeleteResult } from 'typeorm';
import { GrupoMuscular } from '../entities/grupoMuscular.entity';

@Injectable()
export class GrupoMuscularService {
  constructor(
    @InjectRepository(GrupoMuscular)
    private grupoMuscularRepository: Repository<GrupoMuscular>,
  ) {}

  async findAll(): Promise<GrupoMuscular[]> {
    return await this.grupoMuscularRepository.find({
      relations: { exercicio: true },
    });
  }

  async findById(id: number): Promise<GrupoMuscular> {
    const grupoMuscular = await this.grupoMuscularRepository.findOne({
      where: { id },
      relations: { exercicio: true },
    });

    if (!grupoMuscular) {
      throw new NotFoundException('Grupo Muscular não encontrado');
    }

    return grupoMuscular;
  }

  async findByDescricao(descricao: string): Promise<GrupoMuscular[]> {
    const grupoMuscular = await this.grupoMuscularRepository.find({
      where: {
        descricao: ILike(`%${descricao}%`),
      },
      relations: { exercicio: true },
    });

    if (grupoMuscular.length === 0) {
      throw new NotFoundException(
        'Nenhum grupo muscular encontrado com essa descrição',
      );
    }

    return grupoMuscular;
  }

  async findByNome(nome: string): Promise<GrupoMuscular[]> {
    const gruposMusculares = await this.grupoMuscularRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: { exercicio: true },
    });

    if (gruposMusculares.length === 0) {
      throw new NotFoundException(
        'Nenhum grupo muscular encontrado para esse grupo muscular',
      );
    }

    return gruposMusculares;
  }

  async create(grupoMuscular: GrupoMuscular): Promise<GrupoMuscular> {
    return await this.grupoMuscularRepository.save(grupoMuscular);
  }

  async update(grupoMuscular: GrupoMuscular): Promise<GrupoMuscular> {
    await this.findById(grupoMuscular.id);
    return await this.grupoMuscularRepository.save(grupoMuscular);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return this.grupoMuscularRepository.delete(id);
  }
}
