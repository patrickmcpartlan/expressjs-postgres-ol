import bodyParser from "body-parser";
import express from "express";
import pg from "pg";

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
const pool = new pg.Pool();

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT NOW()");
  res.sendFile('main.html', {root: './src/'});

  // C:\Users\patri\Documents\GitHub\expressjs-postgres\src\index.html
  // src\index.html


  // res.sendFile('index.html', { root: path.join(__dirname, '../src') });
  // res.sendFile('src/index.html');

  // app.get('/', function(req, res) {
  //   res.sendFile('index.html', {root: __dirname })
  // });
  
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
