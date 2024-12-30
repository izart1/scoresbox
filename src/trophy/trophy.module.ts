import { Module } from '@nestjs/common';
import { TrophyService } from './trophy.service';
import { TrophyController } from './trophy.controller';

@Module({
  controllers: [TrophyController],
  providers: [TrophyService],
})
export class TrophyModule {}
