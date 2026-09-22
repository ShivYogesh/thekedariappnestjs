import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Logger } from '@nestjs/common';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest(); //get request object form request
    const { method, url,ip ,headers} = request; //get method and url from request
    const now = Date.now();  // note starting date and time 
    // 3. Log the headers (using JSON.stringify to make it readable in the console)
    return next.handle().pipe(tap(()=>{
      const response = context.switchToHttp().getResponse();
        const duration = Date.now() - now;
        this.logger.log(` 
          ${ip} ${method} 
          ${url} ${response.statusCode} - 
          ${duration}ms -
          `);
    }));
  }
}
