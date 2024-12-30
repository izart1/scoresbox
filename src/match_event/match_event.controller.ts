import { Controller } from '@nestjs/common';
import { MatchEventService } from './match_event.service';

@Controller('match-event')
export class MatchEventController {
  constructor(private readonly matchEventService: MatchEventService) {}
}
