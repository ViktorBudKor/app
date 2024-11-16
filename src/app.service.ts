import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  main_index(){
    return 'Hello World!';
  }
}
