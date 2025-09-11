import { Injectable } from '@nestjs/common';

@Injectable()
export class GitlabReviewerService {
  processMergeRequest(): string {
    return 'World';
  }
}
