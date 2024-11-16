import { Module } from '@nestjs/common';
import {ThrottlerModule } from '@nestjs/throttler';
import { MainModule } from './main/main.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 130,
    }]),MainModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/public'
  })
  ],

})
export class AppModule {}
