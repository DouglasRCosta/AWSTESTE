import http from "http";
import handler from "./src/routes/routesHandler.js";

const app = http.createServer(handler);

app.on("error", (err, req, res) => {
  InternalError(req, res);
});
app.listen(80, () => {
  console.log("is running");
});
