import { Module } from '@nestjs/common';
import { PlayerStatisticsService } from './player_statistics.service';
import { PlayerStatisticsController } from './player_statistics.controller';

@Module({
  controllers: [PlayerStatisticsController],
  providers: [PlayerStatisticsService],
})
export class PlayerStatisticsModule {}
