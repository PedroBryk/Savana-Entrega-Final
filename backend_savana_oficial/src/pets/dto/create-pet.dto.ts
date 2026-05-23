import { IsString, IsNumber, IsOptional, MinLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePetDto {
  @ApiProperty({ example: 'Lilo' })
  @IsString()
  @MinLength(2, { message: 'Nome deve ter no mínimo 2 caracteres' })
  name: string;

  @ApiProperty({ example: 'Cachorro' })
  @IsString()
  species: string;

  @ApiProperty({ example: 2 })
  @Type(() => Number)
  @IsNumber()
  @Min(0, { message: 'Idade inválida' })
  age: number;

  @ApiProperty({ example: 'Vira-lata' })
  @IsString()
  breed: string;

  @ApiProperty({ example: 'Muito fofo e brincalhão' })
  @IsString()
  @MinLength(10, { message: 'Descrição muito curta' })
  description: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  image?: string;
}