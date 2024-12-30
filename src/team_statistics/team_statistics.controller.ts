import { Controller } from '@nestjs/common';
import { TeamStatisticsService } from './team_statistics.service';

@Controller('team-statistics')
export class TeamStatisticsController {
  constructor(private readonly teamStatisticsService: TeamStatisticsService) {}
}
