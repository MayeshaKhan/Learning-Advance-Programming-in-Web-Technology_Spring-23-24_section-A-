import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BkashModule } from './bkash/bkash.module';
import { JobModule } from './job/job.module';

import { UsersModule } from './users/users.module';
// ChatCompletionApiModule


import { PaymentModule } from './payment/payment.module';
//import { SkillModule } from './skill/skill.module';
import { ChatModule } from './chat/chat.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './role/roles.guard';
import { PackageModule } from './package/package.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { JwtAuthGuard } from './auth/guards/jwt.guard';
// ChatCompletionApiModule

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule, JobModule, PaymentModule, BkashModule, ChatModule,UsersModule, PackageModule, SubscriptionModule ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide:APP_GUARD,
      useClass: JwtAuthGuard
    },
    {
      provide:APP_GUARD,
      useClass: RolesGuard
    },
  ],
  // providers:[AppService]
})
export class AppModule {}
