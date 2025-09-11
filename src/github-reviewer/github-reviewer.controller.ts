import { Controller, Post, Body } from '@nestjs/common';
import { GithubReviewerService } from "./github-reviewer.service";

@Controller('github-reviewer')
export class GithubReviewerController {

  constructor(private readonly githubReviewerService: GithubReviewerService) { }

  @Post()
  reviewPullRequest(@Body() Body: any): string {
    return this.githubReviewerService.processPullRequest();
  }
}
