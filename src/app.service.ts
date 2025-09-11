import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  processMergeRequest(): string {
    return 'Hello World!';
  }
}
