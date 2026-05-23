import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: { name: string; cpf: string; email: string; password: string }) {
    const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (existing) throw new ConflictException('Email já cadastrado');

    const hashed = await bcrypt.hash(data.password, 10);

    return this.prisma.user.create({
      data: { ...data, password: hashed },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: { id: true, name: true, cpf: true, email: true, createdAt: true },
    });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}