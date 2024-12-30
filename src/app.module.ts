import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { VenueModule } from './venue/venue.module';
import { TrophyModule } from './trophy/trophy.module';
import { TeamModule } from './team/team.module';
import { StatusModule } from './status/status.module';
import { StaffModule } from './staff/staff.module';
import { SeasonModule } from './season/season.module';
import { TeamTrophiesModule } from './team_trophies/team_trophies.module';
import { PlayerTrophiesModule } from './player_trophies/player_trophies.module';
import { TeamStatisticsModule } from './team_statistics/team_statistics.module';
import { PlayerStatisticsModule } from './player_statistics/player_statistics.module';
import { PlayerModule } from './player/player.module';
import { MatchEventModule } from './match_event/match_event.module';
import { LeagueModule } from './league/league.module';
import { FixtureModule } from './fixture/fixture.module';
import { CountryModule } from './country/country.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    VenueModule,
    TrophyModule,
    TeamModule,
    StatusModule,
    StaffModule,
    SeasonModule,
    TeamTrophiesModule,
    PlayerTrophiesModule,
    TeamStatisticsModule,
    PlayerStatisticsModule,
    PlayerModule,
    MatchEventModule,
    LeagueModule,
    FixtureModule,
    CountryModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
