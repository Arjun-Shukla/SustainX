const express = require("express");
const DBConnect = require("../Config/db");
const signupRoute = require("../Routes/signup.route");
const loginRoute = require("../Routes/login.route");
const SubRoute = require("../Routes/subscription.route");
const SelectRoute = require("../Routes/select.route");
const UserRoute = require("../Routes/user.route");
const logOutRoute = require("../Routes/logout.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.set("trust proxy", 1);

app.use(
  cors({
    origin: ["http://localhost:5173", "https://sustain-x-uxtv-nu.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

DBConnect();

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "Healthy",
    message: "SustainX backend is running",
  });
});

app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", SubRoute);
app.use("/api", SelectRoute);
app.use("/api", UserRoute);
app.use("/api", logOutRoute);

module.exports = app;
