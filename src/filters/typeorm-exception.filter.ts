import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class TypeOrmExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const errCode = (exception as any).code;

    // Detect unique constraint violations across common databases
    if (errCode === '23505' || errCode === 'ER_DUP_ENTRY' || errCode === 'SQLITE_CONSTRAINT') {
      return response.status(HttpStatus.CONFLICT).json({
        statusCode: HttpStatus.CONFLICT,
        message: 'Record already exists.',
        error: 'Conflict',
      });
    }

    // Pass along generic 500 internal errors if it's a different query failure
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Internal server error.',
    });
  }
}
