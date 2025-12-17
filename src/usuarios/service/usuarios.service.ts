import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../entities/usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id },
    });

    if (!usuario) {
      throw new HttpException(
        'Usuário não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return usuario;
  }

  async findByUsuario(usuario: string): Promise<Usuario | null> {
    return this.usuarioRepository.findOne({
      where: { usuario },
    });
  }

  async create(usuario: Usuario): Promise<Usuario> {
    const usuarioExistente = await this.findByUsuario(usuario.usuario);

    if (usuarioExistente) {
      throw new HttpException(
        'Usuário já existe',
        HttpStatus.BAD_REQUEST,
      );
    }

    const salt = await bcrypt.genSalt();
    usuario.senha = await bcrypt.hash(usuario.senha, salt);

    return this.usuarioRepository.save(usuario);
  }

  async update(id: number, usuario: Usuario): Promise<Usuario> {
    const usuarioBanco = await this.findById(id);

    const usuarioExistente = await this.findByUsuario(usuario.usuario);

    if (
      usuarioExistente &&
      usuarioExistente.id !== usuarioBanco.id
    ) {
      throw new HttpException(
        'Usuário já existe',
        HttpStatus.BAD_REQUEST,
      );
    }

    usuarioBanco.nome = usuario.nome;
    usuarioBanco.usuario = usuario.usuario;
    usuarioBanco.tipo = usuario.tipo;
    usuarioBanco.altura = usuario.altura;
    usuarioBanco.peso = usuario.peso;
    usuarioBanco.IMC = usuario.IMC;
    usuarioBanco.foto = usuario.foto;

    if (usuario.senha) {
      const salt = await bcrypt.genSalt();
      usuarioBanco.senha = await bcrypt.hash(usuario.senha, salt);
    }

    return this.usuarioRepository.save(usuarioBanco);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
