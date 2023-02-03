import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService extends TypeOrmCrudService<User>{

  constructor(@InjectRepository(User) userRepo) { 
    super(userRepo)
  }

  // create(createUserDto: CreateUserDto) {
  //   let user: User = new User();
  //   user.firstName = createUserDto.firstName;
  //   user.lastName = createUserDto.lastName;
  //   user.age = createUserDto.age;
  //   return this.userRepository.save(user);
  // }

  // findAll() : Promise<User[]> {
  //   return this.userRepository.find();
  // }

  // findOne(id: number) {
  //   console.log(typeof(id));
  //   return this.userRepository.findOne({where:{id}});
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   let user: User = new User();
  //   user.firstName = updateUserDto.firstName;
  //   user.lastName = updateUserDto.lastName;
  //   user.age = updateUserDto.age;
  //   user.id = id;
  //   return this.userRepository.save(user);
  // }

  // remove(id: number) {
  //   return this.userRepository.delete(id);
  // }
}
