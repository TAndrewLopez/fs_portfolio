import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const method = req.method;

    if (method === 'POST' || method === 'PATCH') {
      console.log(method, 'Request Body:', req.body);
    } else if (method === 'DELETE') {
      console.log(method, 'Request Params:', req.params);
    } else if (method === 'GET') {
      console.log(method, 'Request Query:', req.query);
    }

    next();
  }
}
