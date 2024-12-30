import { Controller } from '@nestjs/common';
import { PlayerStatisticsService } from './player_statistics.service';

@Controller('player-statistics')
export class PlayerStatisticsController {
  constructor(private readonly playerStatisticsService: PlayerStatisticsService) {}
}
