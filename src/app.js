import express from "express";
import router from "./routers";
import errorMiddleWare from "./middleWares/error-middleWare";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(router);
app.use(errorMiddleWare);

app.get("/", (req, res) => {
  return res.send("Home Page");
});

const port = 4000;

app.listen(port, () => {
  console.clear();
  console.log(`Server is running on port ${port} ...`);
});
