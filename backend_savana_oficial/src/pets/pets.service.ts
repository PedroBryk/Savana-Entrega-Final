import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  async create(data: { name: string; species: string; age: number; breed: string; description: string; image?: string }) {
    return this.prisma.pet.create({ data });
  }

  async findAll() {
    return this.prisma.pet.findMany();
  }

  async remove(id: number) {
    return this.prisma.pet.delete({ where: { id } });
  }
}