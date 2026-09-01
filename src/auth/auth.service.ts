import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
   // 👈 NestJS injects the instance automatically here
   constructor(private readonly usersService: UsersService,
      private readonly jwtService: JwtService, // 👈 Inject JwtService
   ) { }
   async login(loginDto: LoginDto) {
      const user = await this.usersService.findByUserName(loginDto.userName);
      // user not found
      if (!user) {
         throw new UnauthorizedException('Invalid credentials');
      }
      if(!user.isActive){
         throw new UnauthorizedException('Invalid credentials');
      }
      // Compare plain text with the database hash
      const isMatch = await bcrypt.compare(loginDto.password, user.password);
      if (isMatch) {
         // Define what you want embedded inside the token payload
         const payload = {
            id: user.id,
            userName: user.userName,
            profileImgPath: user.profileImgPath,
            role: user.role
         };
         return {
            access_token: this.jwtService.sign(payload), // 👈 Generate JWT
         };
      }
      throw new UnauthorizedException('Invalid credentials');



   }

}
