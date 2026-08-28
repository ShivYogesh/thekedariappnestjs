import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
   // Inject ConfigService via the constructor
  constructor(private configService: ConfigService) {}
  getHello(): string {
    return 'Yogesh New New Very New  World!';
  }
  getHello1():string{
    return 'This is Post function in service';
  }
  
}
