import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PackageService } from './package.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { Role } from 'src/role/role.enum';
import { Roles } from 'src/role/role.decorator';
import { RolesGuard } from 'src/role/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('package')
export class PackageController {
  constructor(private readonly packageService: PackageService) {}


  @Roles(Role.Admin)
  @UsePipes(new ValidationPipe)
  @Post()
  create(@Body() createPackageDto: CreatePackageDto) {
    return this.packageService.create(createPackageDto);
  }

  @Roles(Role.User)
  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.packageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.packageService.findOne(+id);
  }


  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePackageDto: UpdatePackageDto) {
    return this.packageService.update(+id, updatePackageDto);
  }

  
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.packageService.remove(+id);
  }
}
