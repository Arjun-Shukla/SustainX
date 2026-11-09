const app = require("./src/App");
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:5173", "https://sustain-x-uxtv-nu.vercel.app"],
    credentials: true,
  }),
);

const url = `127.0.0.1:80`;

app.listen(80, () => {
  console.log(`App Running on ${url} Successfully`);
});
