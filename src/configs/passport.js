import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { jwt as jwtVars } from 'configs/vars';
import { TOKEN_TYPES } from 'utils/constants';
import { User } from 'database/models';

const jwtOptions = {
  secretOrKey: jwtVars.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== TOKEN_TYPES.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await User.findByPk(payload.sub);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

export const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
