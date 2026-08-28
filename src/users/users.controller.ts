import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/creat-user.dto';
import { AppService } from 'src/app.service';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userServices:UsersService){}//constructor()
     @UseGuards(JwtAuthGuard) // 👈 This route now requires a valid Bearer token
        @Get()
    getAll(){
        return this.userServices.findAll();
    }//getAll
    @Get(':id')
    getById(@Param('id') _id:string){
        return this.userServices.findOne(Number(_id));
    }//getById()
    
    @Post()
    async creat(@Body() body:CreateUserDto):Promise<User> {
        return this.userServices.create(body);

    }//create()
    
    /*
    @Post()
    async creat(@Body() body:Partial<User>):Promise<User> {
        return this.userServices.create(body);

    }//create()
    */
    @Patch(':id')
    async update(@Param('id') id:string,@Body() body:UpdateUserDto):Promise<User | null> {
        return this.userServices.update(Number(id),body);

    }//create()
    @Delete(':id')
    async delete(@Param('id') _id:string){
        return this.userServices.remove(Number(_id));

    }
}
