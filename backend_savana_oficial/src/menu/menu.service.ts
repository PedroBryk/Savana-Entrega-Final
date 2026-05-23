import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async create(data: { name: string; description: string; price: number; category: string; image?: string }) {
    console.log('Dados recebidos:', data);
    return this.prisma.menuItem.create({ data });
  }

  async findAll() {
    return this.prisma.menuItem.findMany();
  }

  async remove(id: number) {
    return this.prisma.menuItem.delete({ where: { id } });
  }
}