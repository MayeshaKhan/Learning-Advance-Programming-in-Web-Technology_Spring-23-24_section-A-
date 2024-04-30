import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from 'src/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRepo:Repository<Product>){}

  async create(createUserDto: CreateProductDto) {
    return await this.productRepo.save(createUserDto);
  }
  
  async findAll() {
    return await this.productRepo.find();
  }

  async findOne(id: number) {
    return await this.productRepo.findOneBy({id:id});
  }

  async update(id: number, updatePackageDto: UpdateProductDto) {
    return await this.productRepo.update(id, updatePackageDto);
  }

  async remove(id: number) {
    return await this.productRepo.delete({id:id});
  }
}
