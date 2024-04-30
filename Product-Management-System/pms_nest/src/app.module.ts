import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { NoSpecModule } from './no-spec/no-spec.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { ProductModule } from './product/product.module';
import { UserModule } from './customer/user.module';
@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
