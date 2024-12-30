import { Controller } from '@nestjs/common';
import { PlayerTrophiesService } from './player_trophies.service';

@Controller('player-trophies')
export class PlayerTrophiesController {
  constructor(private readonly playerTrophiesService: PlayerTrophiesService) {}
}
