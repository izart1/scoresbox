import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsString({
    message: 'Почта обязательна',
  })
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Пароль должен быть не менее 8 символов' })
  @MaxLength(32, { message: 'Пароль не должен превышать 32 символа' })
  password: string;
}
