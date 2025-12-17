import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';   
import { UsuariosService } from '../service/usuarios.service';
import { Usuario } from '../entities/usuario.entity';
import { JwAuthGuard } from '@nestjs/jwt';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuarios')
@ApiBearerAuth()
@Controller('usuarios')
export class UsuariosController {                                           
  constructor(private readonly usuariosService: UsuariosService) {}

    @UseGuards(JwAuthGuard)
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]> {
        return this.usuariosService.findAll();
    }
    
    @UseGuards(JwAuthGuard)
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id') id: string): Promise<Usuario> {
        return this.usuariosService.findOne(+id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuariosService.create(usuario);
    }

    @UseGuards(JwAuthGuard)
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') id: string, @Body() usuario: Usuario): Promise<void> {
        return this.usuariosService.update(+id, usuario);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.usuariosService.remove(+id);
    }}