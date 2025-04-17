import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "TwinsDoc",
    })
    .then((c) => console.log(`Database Connected With ${c.connection.host}`))
    .catch((e) =>
      console.log(`Some Error occured With Connecting To Database${e}`)
    );
};
