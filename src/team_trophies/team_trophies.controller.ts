import { Controller } from '@nestjs/common';
import { TeamTrophiesService } from './team_trophies.service';

@Controller('team-trophies')
export class TeamTrophiesController {
  constructor(private readonly teamTrophiesService: TeamTrophiesService) {}
}
