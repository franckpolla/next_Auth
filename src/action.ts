"use server";
import { CreateSession, UserDatasession } from "./li";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { defaultLog } from "./li";
import { redirect } from "next/navigation";

/* This function retrieves the session data in a typical server-side context where you have access to the request (req) and response (res) objects.
It's commonly used in API routes or server-side logic where you need to read or modify session data based on incoming HTTP requests. */

const DB = [
  {
    firstnam: "daniel",
    lastname: "sue",
    email: " john@daniel.com",
    password: "123",
    ispre: true,
  },
  {
    firstname: "Michael",
    lastname: "Harris",
    email: "michael.harris@domain.com",
    password: '#J8!"f+A',
    ispre: true,
  },
  {
    firstname: "Matthew",
    lastname: "Martin",
    email: "matthew.martin@test.com",
    password: "&^0A*=*v",
    ispre: true,
  },
  {
    firstname: "Sarah",
    lastname: "Smith",
    email: "sarah.smith@mail.com",
    password: "z1Mn>H3?",
    ispre: false,
  },
  {
    firstname: "Michael",
    lastname: "Anderson",
    email: "michael.anderson@test.com",
    password: "Ja9}t%Rw",
    ispre: true,
  },
  {
    firstname: "Jessica",
    lastname: "White",
    email: "jessica.white@test.com",
    password: "P;wn>_m%",
    ispre: true,
  },
  {
    firstname: "Emma",
    lastname: "Johnson",
    email: "emma.johnson@mail.com",
    password: "~})jzCH`",
    ispre: false,
  },
  {
    firstname: "David",
    lastname: "Smith",
    email: "david.smith@mail.com",
    password: "*0iW~|k1",
    ispre: true,
  },
  {
    firstname: "David",
    lastname: "White",
    email: "david.white@test.com",
    password: 'lr"5bTYl',
    ispre: true,
  },
  {
    firstname: "Emma",
    lastname: "Brown",
    email: "emma.brown@example.com",
    password: "ljcLkw[D",
    ispre: true,
  },
  {
    firstname: "Emma",
    lastname: "Brown",
    email: "emma.brown@domain.com",
    password: ":l>WC3$;",
    ispre: false,
  },
];

export const getSessions = async () => {
  const session = await getIronSession<UserDatasession>(
    cookies(),
    CreateSession
  );

  if (!session.isLoggedIN) {
    session.isLoggedIN = defaultLog.isLoggedIn;
  }
  return session;
};
export const login = async (formData: FormData) => {
  const session = await getSessions();
  const formUsername = formData.get("firstname") as string;
  const formLastname = formData.get("lastname") as string;
  const formPassword = formData.get("password");
  const formEmail = formData.get("email");

  // Check for user in  DB
  const user = DB.find(
    (user) =>
      user.firstname === formUsername &&
      user.lastname === formLastname &&
      user.password === formPassword&&
      user.email === formEmail
  );
  // this if statement is executed before the user is logged in and update the session storage
  if (user) {
    session.userId = user.email;
    session.firstName = user.firstname;
    session.lastName = user.lastname;
    session.email = user.email;
    session.ispre = user.ispre;
    session.isLoggedIN = true;
    //  The await session.save(); statement is used to persist the session data after it has been modified. This is a crucial step in session management to ensure that any changes made to the session object (such as updating user details or login status) are saved and available for subsequent requests.
    await session.save();
    redirect("/");
  } else {
    session.isLoggedIN = false;

    return { error: "User not found, check your details please!!!" };
  }

};



export const logout = async () => {};
