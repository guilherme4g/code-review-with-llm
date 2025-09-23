import { Body, Controller, Post, Req } from '@nestjs/common';
import { GitlabReviewerService } from "./gitlab-reviewer.service";

@Controller('gitlab-reviewer')
export class GitlabReviewerController {

  constructor(private readonly gitlabReviewerService: GitlabReviewerService) { }
  
  @Post()
  reviewMergeRequest(@Body() body: any): string {
    console.log(`body:${body}`);
    return this.gitlabReviewerService.processMergeRequest();
  }
}
