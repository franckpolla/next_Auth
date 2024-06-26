import {SessionOptions} from "iron-session"

export type UserDatasession = {
  userId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  img?: string;
  ispre: boolean;
  isLoggedIN: boolean;
};

   export const defaultLog = {
    isLoggedIn: false,
   }

// Create a new session object with the session data and session attributes from
//This configuration ensures that your session handling is both secure and appropriate for different environments (development vs. production).
export const CreateSession: SessionOptions = {
    password: process.env.SECRET_PASSWAORD!,
    cookieName: " Franck.dev",
    cookieOptions: {
      cookieOptions: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 4, // 4 hour timeout after that the user has to sign in again
        secure: process.env.NODE_ENV === 'production',
      },
    }

}