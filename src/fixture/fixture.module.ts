import { Module } from '@nestjs/common';
import { FixtureService } from './fixture.service';
import { FixtureController } from './fixture.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FixtureController],
  providers: [FixtureService, PrismaService],
})
export class FixtureModule {}
