import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubReviewerService {
  processPullRequest(): string {
    return 'Hello';
  }
}
