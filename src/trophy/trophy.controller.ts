import { Controller } from '@nestjs/common';
import { TrophyService } from './trophy.service';

@Controller('trophy')
export class TrophyController {
  constructor(private readonly trophyService: TrophyService) {}
}
