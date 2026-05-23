import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './users/users.module';
import { MenuModule } from './menu/menu.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PetsModule, UsersModule, MenuModule, AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
