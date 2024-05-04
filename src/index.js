// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB();
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
