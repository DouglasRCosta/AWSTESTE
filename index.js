import http from "http";
import handler from "./src/routes/routesHandler.js";

const app = http.createServer(handler);

app.on("error", (err, req, res) => {
  InternalError(req, res);
});
app.listen(400, () => {
  console.log("is running");
});

const InternalError = (req, res) => {
  res.statusCode = 400;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ err: "erro Interno no servidor" }));
  res.end();
};
