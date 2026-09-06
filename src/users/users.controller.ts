import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/creat-user.dto';
import { AppService } from 'src/app.service';
import { user_master } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import path from 'path';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';
import { Roles } from 'src/auth/guards/roles.decorator';
import { Role } from 'src/auth/guards/role.enum';

@Controller('user-master')
export class UsersController {
    constructor(
        private readonly userServices:UsersService){}//constructor()
     @UseGuards(JwtAuthGuard,RolesGuard) // 👈 This route now requires a valid Bearer token
        @Get()
        @Roles(Role.SuperAdmin) // Only accessible if user.roles contains 'admin'
    getAll(){
        return this.userServices.findAll();
    }//getAll
    @UseGuards(JwtAuthGuard) // 👈 This route now requires a valid Bearer token
    @Get(':id')
    getById(@Param('id') _id:string){
        return this.userServices.findOne(Number(_id));
    }//getById()
    
    @Post()
    async creat(@Body() body:CreateUserDto):Promise<user_master> {
        return this.userServices.create(body);

    }//create()
    
    @UseGuards(JwtAuthGuard) // 👈 This route now requires a valid Bearer token
    @Patch(':id')
    async update(@Param('id') id:string,@Body() body:UpdateUserDto):Promise<user_master | null> {
        return this.userServices.update(Number(id),body);

    }//update()
    @UseGuards(JwtAuthGuard) // 👈 This route now requires a valid Bearer token
    @Patch('changepassword/:id')
    async changePassword(@Param('id') id:string,@Body('oldPassword') oldPassword:string,@Body('newPassword') newPassword:string){
         return this.userServices.changePassword(Number(id),oldPassword,newPassword);
    }//changepassword()
    @UseGuards(JwtAuthGuard) // 👈 This route now requires a valid Bearer token
    @Delete(':id')
    async delete(@Param('id') _id:string){
        return this.userServices.remove(Number(_id));

    }
}
