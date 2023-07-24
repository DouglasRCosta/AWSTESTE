import http from "http";
import handler from "./src/routes/routesHandler.js";

const app = http.createServer(handler);


app.listen(3333, () => {
  console.log("is running");
});
