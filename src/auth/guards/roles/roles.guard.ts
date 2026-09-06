// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../roles.decorator';
import { Role } from '../role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Retrieve the required roles from the route handler metadata
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log(requiredRoles);
    // If no roles are required, allow public access
    if (!requiredRoles) {
      return true;
    }

    // 2. Extract the user object from the current execution context
    const { user } = context.switchToHttp().getRequest();
    console.log(user);
    // 3. Match user roles against required roles
    return requiredRoles.some((role) => user?.role?.includes(role));
  }
}

