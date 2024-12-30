import { Module } from '@nestjs/common';
import { TeamStatisticsService } from './team_statistics.service';
import { TeamStatisticsController } from './team_statistics.controller';

@Module({
  controllers: [TeamStatisticsController],
  providers: [TeamStatisticsService],
})
export class TeamStatisticsModule {}
