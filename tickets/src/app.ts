import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { NotFoundError, errorhandler } from "@aribaticketing/common";

const app = express();

app.set("trust proxy", 1);
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(json());

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorhandler);

export { app };
