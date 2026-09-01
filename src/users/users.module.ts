import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AppModule } from 'src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user_master } from './user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([user_master])],
  controllers: [UsersController],
   providers: [UsersService], // 👈 Make sure this line exists!
   exports: [UsersService], // 👈 Make UsersService available to other modules
})
export class UsersModule {}
