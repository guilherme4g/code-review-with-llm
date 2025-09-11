import { Module } from '@nestjs/common';
import { GithubReviewerController } from './github-reviewer/github-reviewer.controller';
import { GitlabReviewerController } from './gitlab-reviewer/gitlab-reviewer.controller';
import { GitlabReviewerService } from './gitlab-reviewer/gitlab-reviewer.service';
import { GithubReviewerService } from './github-reviewer/github-reviewer.service';

@Module({
  imports: [],
  controllers: [GithubReviewerController, GitlabReviewerController],
  providers:[GitlabReviewerService, GithubReviewerService],
})
export class AppModule {}
