import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false, // Убедимся, что токен не просрочен
      secretOrKey: process.env.JWT_SECRET, // Используем секрет из переменных окружения
    });
  }

  async validate(payload: { sub: string; email: string }) {
    try {
      const user = await this.userService.getById(payload.sub); 
      return user; // Возвращаем пользователя, чтобы он оказался в request
    } catch (error) {
      throw new UnauthorizedException(
        'Токен недействителен или пользователь не найден',
      );
    }
  }
}
