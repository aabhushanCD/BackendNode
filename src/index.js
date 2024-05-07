// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./server.js";
dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR", error);
      throw error;
     
    });
 
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("connetion failed", error);
  });
/*
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("Error", error);
      throw error;
    });
    app.listen(process.env.PORT, (req, res) => {
      console.log(`listining to the database ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error on database cannot connect", error);
    throw error;
  }
})();
*/
