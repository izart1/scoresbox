import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/auth/role.enum';

export const RequireRole = (role: UserRole) => SetMetadata('role', role);
