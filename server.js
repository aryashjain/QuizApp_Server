import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";
/** connecting mongodb */
import connect from "./database/connection.js";

const app = express();

/** App middleware*/
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

const PORT = process.env.PORT || 8080;

/** Routes */
// apis
app.use("/api", router);

app.get("/", (req, res) => {
  try {
    res.json("get req");
  } catch (err) {
    req.json(err);
  }
});

/** start server only if we have valid backend */
connect()
  .then(() => {
    try {
      app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
      });
    } catch (err) {
      console.log("canot connect to server", err);
    }
  })
  .catch((err) => {
    console.log(err);
  });
