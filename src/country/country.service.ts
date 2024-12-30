import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async getById(countryId: string) {
    const country = await this.prisma.country.findUnique({
      where: {
        id: countryId,
      },
    });

    if (!country)
      throw new NotFoundException(`Country with ID ${countryId} not found`);

    return country;
  }

  async getAll() {
    return this.prisma.country.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async create(dto: CreateCountryDto) {
    try {
      const existingCountry = await this.prisma.country.findFirst({
        where: {
          OR: [{ name: dto.name }, { code: dto.code }],
        },
      });

      if (existingCountry) {
        if (existingCountry.name === dto.name) {
          throw new ForbiddenException(
            'Страна с таким названием уже существует',
          );
        }
        if (existingCountry.code === dto.code) {
          throw new ForbiddenException('Страна с таким кодом уже существует');
        }
      }
      return this.prisma.country.create({
        data: {
          ...dto,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Country with this name or code already exists',
          );
        }
      }

      throw error;
    }
  }

  async update(countryId: string, dto: CreateCountryDto) {
    try {
      await this.getById(countryId);

      const duplicateCountry = await this.prisma.country.findFirst({
        where: {
          OR: [
            { name: dto.name, NOT: { id: countryId } },
            { code: dto.code, NOT: { id: countryId } },
          ],
        },
      });

      if (duplicateCountry) {
        if (duplicateCountry.name === dto.name) {
          throw new ForbiddenException(
            'Это название уже используется другой страной',
          );
        }
        if (duplicateCountry.code === dto.code) {
          throw new ForbiddenException(
            'Этот код уже используется другой страной',
          );
        }
      }
      return this.prisma.country.update({
        where: { id: countryId },
        data: {
          ...dto,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Страна с таким названием или кодом уже существует',
          );
        }
      }
      throw error;
    }
  }

  async delete(countryId: string) {
    try {
      await this.getById(countryId);

      return this.prisma.country.delete({
        where: { id: countryId },
      });
    } catch (error) {
      throw error;
    }
  }
}
