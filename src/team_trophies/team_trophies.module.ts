import { Module } from '@nestjs/common';
import { TeamTrophiesService } from './team_trophies.service';
import { TeamTrophiesController } from './team_trophies.controller';

@Module({
  controllers: [TeamTrophiesController],
  providers: [TeamTrophiesService],
})
export class TeamTrophiesModule {}
