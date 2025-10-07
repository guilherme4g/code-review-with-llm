//import fs from "fs";
import express from 'express';
import { BadRequestException, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { PullRequestSummary } from "./pull-request-summary";
import { GithubReviewerService } from "./github-reviewer.service";

@Controller('github-reviewer')
export class GithubReviewerController {

  constructor(private readonly githubReviewerService: GithubReviewerService) { }

  @Post()
  @HttpCode(HttpStatus.OK)
  async reviewPullRequest(@Req() request: express.Request): Promise<void> {
    
    if (!this.validateRequest(request.body)) {
      throw new BadRequestException("Not valid github request");
    }
    
    // const filename = `${__dirname}/PR-${Date.now()}`;
    // console.log(`save at: ${filename}`)
    //  fs.writeFileSync(`${filename}`,  request.body);

    const pullRequestSummary : PullRequestSummary = {
      repo: request.body.repository.name,
      owner: request.body.repository.owner.login,
      pull_number: request.body.pull_request.number,
      action: request.body.action,
      state: request.body.pull_request.state,
      diff_url: request.body.pull_request.diff_url
    }

    const result = await this.githubReviewerService.processPullRequest(pullRequestSummary);

    if (result instanceof Error) {
      throw new BadRequestException(result.message);
    } else {
      return;
    }
  }

  validateRequest (body: any): boolean {
    return body && body.action && body.pull_request && body.pull_request.state && body.pull_request.diff_url;
  }
}
