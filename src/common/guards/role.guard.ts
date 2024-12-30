import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from 'src/auth/role.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.get<UserRole>(
      'role',
      context.getHandler(),
    );

    // Если роль не указана, доступ запрещён (по умолчанию закрыто)
    if (!requiredRole) {
      return false;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Проверяем аутентификацию
    if (!user) {
      throw new UnauthorizedException('Пользователь не аутентифицирован');
    }

    // Проверяем роль
    if (user.role !== UserRole.ADMIN && requiredRole === UserRole.ADMIN) {
      throw new ForbiddenException(
        'Доступ запрещен: требуются права администратора',
      );
    }

    return true;
  }
}
