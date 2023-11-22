const express = require("express");
const fs = require("fs").promises;
const cors = require("cors");

const app = express();
const port = 7000;

app.use(express.json());
app.use(cors());

app.get("/api/data", async (req, res) => {
  try {
    const data = await fs.readFile("data.json", "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: "Não foi possível carregar os dados" });
  }
});

app.listen(port, ()=> {
    console.log(`A API está sendo executada na porta http://localhost:${port}`);

});
