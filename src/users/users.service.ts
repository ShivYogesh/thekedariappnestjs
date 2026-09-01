import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/creat-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { user_master } from './user.entity';
import { Repository } from 'typeorm'; // Make sure to add this import at the top
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(user_master)
  private userRepository: Repository<user_master>) { }//constructor()
  // create function with DTO
  async create(createUserDto: CreateUserDto): Promise<user_master> {
    try {
      const { password, ...userDetails } = createUserDto;
      // 1. Generate a salt (10 rounds is the industry standard balance of speed/security)
      const salt = await bcrypt.genSalt(10);
      // 2. Hash the password using the salt
      const hashedPassword = await bcrypt.hash(password, salt);
      //   FIX (TypeORM Style)
      const newUser = this.userRepository.create({
        ...userDetails,
        password: hashedPassword, // 👈 Just pass the object directly
      });
      // TypeORM's .create() only instantiates the entity. 
      // You must call .save() to actually persist it to the database.
      return await this.userRepository.save(newUser);

    } catch (error: unknown) {
      // 1. If it's already a NestJS HTTP Exception, just rethrow it
      if (error instanceof NotFoundException) {
        throw error;
      }
      // 2. Handle database connection crashes or unexpected code errors safely
      console.error('Database crash or unexpected error:', error);
      throw new InternalServerErrorException('Something went wrong on our end');
    }

  }//create()

  async findAll(): Promise<user_master[]> {
    return await this.userRepository.find();
  }//findAll()

  async findOne(id: number): Promise<user_master | null> {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return user;
  }//findone()
  // this function made for login
  async findByUserName(userName: string): Promise<user_master | null> {
    const user = await this.userRepository.findOneBy({ userName: userName });
    if (!user) {
      throw new NotFoundException(`Record Not Found`);
    }
    return user;
  }//findone()
  //changepassword
  async changePassword(id: number, oldPassword: string, newPassword: string): Promise<user_master> {

    try {
      // 1. Find the existing user first to ensure they exist
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) { // if user not found then exit here
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (isMatch) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        return await this.userRepository.save(user);
      }
      throw new BadRequestException('Incorrect old password');
    } catch (error) {
      console.error("Caught Error:", error);
      throw error;

    }


    // Save the merged entity back to the database

  }//changepassword()
  async update(id: number, updateUserDto: UpdateUserDto): Promise<user_master> {
    try {
      // 1. Find the existing user first to ensure they exist
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) { // if user not found then exit here
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      // 2. Destructure the password out of the DTO
      const { password, ...otherDetails } = updateUserDto;
      // 3. Prepare the update data payload
      const updateData: Partial<user_master> = { ...otherDetails };
      // 4. If a new password is provided, hash it
      if (password) {

        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(password, salt);
      }
      // 5. Merge the updates into the existing user entity and save
      this.userRepository.merge(user, updateData);
      return await this.userRepository.save(user);
    } catch (error) {
      throw new NotFoundException(`Record with ID ${id} not found, nothing was updated`);
    }


    // Save the merged entity back to the database

  }//update()
  async remove(id: number) {
    const result = await this.userRepository.softDelete(id);
    // If affected rows is 0, the ID was never there
    if (result.affected === 0) {
      throw new NotFoundException(`Record with ID ${id} not found, nothing was deleted`);
    }
    // Return a success message or object confirming deletion
    return { message: `Record with ID ${id} successfully deleted` };
  }//remove()
}//export class UsersService
