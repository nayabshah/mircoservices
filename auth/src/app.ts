import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/current-user";
import { NotFoundError, errorhandler } from "@aribaticketing/common";
import { signInRouter } from "./routes/signin";
import { signOut } from "./routes/signout";
import { signUp } from "./routes/signup";

const app = express();

app.set("trust proxy", 1);
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOut);
app.use(signUp);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorhandler);

export { app };
