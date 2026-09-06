// auth/strategies/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token from "Authorization: Bearer <TOKEN>"
      ignoreExpiration: false,
      secretOrKey: 'YOUR_JWT_SECRET_KEY', // Must match the secret in AuthModule
    });
  }

  async validate(payload: any) {
    // Whatever is returned here is automatically appended to the Request object as req.user
    return { userId: payload.sub,
       username: payload.userName,
       role:payload.role,
       profileImgPath:payload.profileImgPath 
      };
  }
}
