import express from "express";
import compression from "compression";
import cors from "cors";
import { createServer } from "http";

const app = express();

app.use(cors());
app.use(compression());

app.get("/", (req, res) => {
  res.send("Holiwis");
});

const httpServer = createServer(app);

const PORT = 5000;

httpServer.listen(PORT, () =>
  console.log(`Academia Online listening on http://localhost:${PORT}`)
);
