import { Controller, Get, Post, Delete, Param, Body, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { MenuService } from './menu.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@ApiTags('Cardápio')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cadastrar item no cardápio' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './upload',
      filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, unique + extname(file.originalname));
      },
    }),
  }))
  async create(
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: string,
    @Body('category') category: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.menuService.create({
      name,
      description,
      price: Number(price),
      category,
      image: file ? `/upload/${file.filename}` : undefined,
    });
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os itens do cardápio' })
  findAll() {
    return this.menuService.findAll();
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Deletar item do cardápio' })
  remove(@Param('id') id: string) {
    return this.menuService.remove(Number(id));
  }
}