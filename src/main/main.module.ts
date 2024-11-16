import { Module } from '@nestjs/common';
import { MainService } from './main.service';
import { MainController } from './main.controller';
import { APP_GUARD} from '@nestjs/core';
import { ThrottlerGuard} from '@nestjs/throttler';

@Module({
  controllers: [MainController],
  providers: [MainService,{
    provide: APP_GUARD,
    useClass: ThrottlerGuard
  }],
imports: []
})
export class MainModule {}
