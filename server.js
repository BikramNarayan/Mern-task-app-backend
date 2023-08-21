const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const { mongoose } = require("mongoose");
const Task = require("./model/task_model");
const router = require("./router/router");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
//Hum chahte hai ki pehle mongooes connect ho bad me server start
// const startServer = async () => {
//   await connectDB();
//   app.listen(PORT, () => {
//     console.log(`server started at port ${PORT}`);
//   });
// };
// startServer();

// -----------------------------------------------------------------------------
//second method to connect Moongooes
// -------------------------------------------------------------------------------

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // .then((db) => console.log("DB is connected"))
  .then(() => {
    app.listen(PORT, () => {
      // console.log(process.env.PORT);
      // console.log(process.env.MONGO_URI);
      console.log("server started " + PORT);
    });
  })
  .catch((err) => console.log(err));

// -----------------------------------------------------------------------------
// Middle ware function
const logger = (req, res, next) => {
  console.log("MIddleware ");
  console.log(req.method);
  next();
};
// -------------------------------------------------------------------------------

// ----------------------------middleware-----------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(router);
// -------------------------------------------------------------------------------
