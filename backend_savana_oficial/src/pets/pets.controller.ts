import { Controller, Get, Post, Delete, Param, Body, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PetsService } from './pets.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@ApiTags('Pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cadastrar novo pet' })
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
  create(
    @Body() body: { name: string; species: string; age: string; breed: string; description: string },
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.petsService.create({
      name: body.name,
      species: body.species,
      age: Number(body.age),
      breed: body.breed,
      description: body.description,
      image: file ? `/upload/${file.filename}` : undefined,
    });
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os pets' })
  findAll() {
    return this.petsService.findAll();
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Deletar pet' })
  remove(@Param('id') id: string) {
    return this.petsService.remove(Number(id));
  }
}