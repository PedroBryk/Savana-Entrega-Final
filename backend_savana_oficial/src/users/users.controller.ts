import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('Usuários')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar novo usuário' })
  create(@Body() body: { name: string; cpf: string; email: string; password: string }) {
    return this.usersService.create(body);
  }

  @Get()
  @ApiOperation({ summary: 'Listar usuários cadastrados' })
  findAll() {
    return this.usersService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar usuário' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
  }
}