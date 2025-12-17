import { HttpStatus, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
    constructor(
    @InjectRepository(Usuario)
private readonly usuarioRepository: Repository<Usuario>,
private bcrypt: Bcrypt  
  ) {}
  
async findAll(): Promise<Usuario[]> {
  return this.usuarioRepository.find();
  }
async findById(id: number): Promise<Usuario> {   
let usuario = await this.usuarioRepository.findOne({
    where: id 
});

if(!usuario) {
    throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);
}
  return usuario;
  }

async create(usuario: Usuario): Promise<Usuario> {
let usuarioExistente = await this.findByUsuario(usuario.usuario);

if(usuarioBusca) {
    usuario.senha = await this.bcrypt.hash(usuario.senha);
return await this.usuarioRepository.save(usuario);
}}
  const salt = await bcrypt.genSalt();
  usuario.senha = await bcrypt.hash(usuario.senha, salt);
  return this.usuarioRepository.save(usuario);
}

async update(id: number, usuario: Usuario): Promise<void> {
  let usuarioUpdate: Usuario = await this.findById(Usuario.id);
  let usuarioBusca: await this.findByUsuario(usuario.usuario);

  if (!usuarioUpdate) {
    throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);
  }
 if (usuarioBusca && usuarioBusca.id !== Usuario.id)
    throw new HttpException('Usuario ja existe!', HttpStatus.BAD_REQUEST);

  usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha);}
  return await this.usuarioRepository.save(usuario);


async remove(id: number): Promise<void> {
  await this.usuarioRepository.delete(id);
  }
}

findByUsuario(usuario: string) {
  return this.usuarioRepository.findOneBy({ usuario });
}
