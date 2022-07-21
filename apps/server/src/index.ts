import bodyParser from "body-parser";
import express from "express";
import pg from "pg";

const pool = new pg.Pool();

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});

app.get("/jokes", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM jokes");

  res.json(rows);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
