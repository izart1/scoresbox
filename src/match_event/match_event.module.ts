import { Module } from '@nestjs/common';
import { MatchEventService } from './match_event.service';
import { MatchEventController } from './match_event.controller';

@Module({
  controllers: [MatchEventController],
  providers: [MatchEventService],
})
export class MatchEventModule {}
