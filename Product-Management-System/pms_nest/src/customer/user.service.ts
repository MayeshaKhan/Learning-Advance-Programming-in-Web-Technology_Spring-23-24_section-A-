import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo:Repository<User>){}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepo.save(createUserDto);
  }
  
  async findAll() {
    return await this.userRepo.find();
  }

  async findOne(id: number) {
    return await this.userRepo.findOneBy({id:id});
  }

  async update(id: number, updatePackageDto: UpdateUserDto) {
    return await this.userRepo.update(id, updatePackageDto);
  }

  async remove(id: number) {
    return await this.userRepo.delete({id:id});
  }
}
