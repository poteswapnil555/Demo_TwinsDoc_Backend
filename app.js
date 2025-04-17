import { config } from "dotenv";
import express from "express";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./router/userRouter.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import appointmentRouter from "./router/appointmentRouter.js";
import cors from "cors";

const app = express();

config({
  path: "./data/config.env",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(
  cors({
    origin: [process.env.FRONTEND_URL_ONE],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

app.get("/", (req, res) => {
  res.send("TwinsDoc Backend Working....");
});

app.use(errorMiddleware);
export default app;
