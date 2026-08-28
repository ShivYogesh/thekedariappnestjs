import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AppModule } from 'src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
   providers: [UsersService], // 👈 Make sure this line exists!
   exports: [UsersService], // 👈 Make UsersService available to other modules
})
export class UsersModule {}
