import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { GithubReviewerController } from './github-reviewer/github-reviewer.controller';
import { GitlabReviewerController } from './gitlab-reviewer/gitlab-reviewer.controller';
import { GitlabReviewerService } from './gitlab-reviewer/gitlab-reviewer.service';
import { GithubReviewerService } from './github-reviewer/github-reviewer.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [GithubReviewerController, GitlabReviewerController],
  providers:[GitlabReviewerService, GithubReviewerService],
})
export class AppModule {}
