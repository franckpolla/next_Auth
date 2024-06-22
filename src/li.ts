import {SessionOptions} from "iron-session"

type userDatasession = {
  userId?: string;
  userName?: string;
  img?: string;
  ispre: boolean;
};

// Create a new session object with the session data and session attributes from
//This configuration ensures that your session handling is both secure and appropriate for different environments (development vs. production).
export const userData: SessionOptions = {
    password: process.env.SECRET_PASSWAORD!,
    cookieName: " Franck.dev",
    cookieOptions: {
      cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
      },
    }

}