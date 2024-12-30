import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FixtureService {
  constructor(private prisma: PrismaService) {}

  async getById(fixtureId: string) {
    const fixture = await this.prisma.fixture.findUnique({
      where: {
        id: fixtureId,
      },
    });

    return fixture;
  }
}
