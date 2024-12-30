import { Module } from '@nestjs/common';
import { PlayerTrophiesService } from './player_trophies.service';
import { PlayerTrophiesController } from './player_trophies.controller';

@Module({
  controllers: [PlayerTrophiesController],
  providers: [PlayerTrophiesService],
})
export class PlayerTrophiesModule {}
