import { IsString, IsNumber, IsOptional, MinLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateMenuDto {
  @ApiProperty({ example: 'Cappuccino' })
  @IsString()
  @MinLength(2, { message: 'Nome deve ter no mínimo 2 caracteres' })
  name: string;

  @ApiProperty({ example: 'Café com leite vaporizado' })
  @IsString()
  @MinLength(5, { message: 'Descrição muito curta' })
  description: string;

  @ApiProperty({ example: 12.90 })
  @Type(() => Number)
  @IsNumber()
  @Min(0.01, { message: 'Preço inválido' })
  price: number;

  @ApiProperty({ example: 'Bebidas' })
  @IsString()
  category: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  image?: string;
}