import { IsString } from 'class-validator';

export class CreateCountryDto {
  @IsString({ message: 'Имя обязательно' })
  name: string;

  @IsString({ message: 'Короткий код страны обязателен' })
  code: string;

  @IsString()
  flag?: string;
}
