import express from "express";

const app = express();

const port = 3000;
app.use(express.json());

// array za teaData
let teaData = [];
let nextId = 1;

//add new caj
app.post("/cajevi", (req, res) => {
  const { naziv, cena } = req.body;
  const noviCaj = {
    id: nextId++,
    naziv,
    cena,
  };
  teaData.push(noviCaj);
  res.status(201).send(noviCaj);
});

//get all cajevi
app.get("/cajevi", (req, res) => {
  res.status(200).send(teaData);
});

//get cajevi by id
app.get("/cajevi/:id", (req, res) => {
  const caj = teaData.find((caj) => caj.id === parseInt(req.params.id));
  if (!caj) {
    return res.status(404).send("Caj nije pronadjen.");
  }
  res.status(200).send(caj);
});

//update caj by id
app.put("/cajevi/:id", (req, res) => {
  const caj = teaData.find((caj) => caj.id === parseInt(req.params.id));
  if (!caj) {
    return res.status(404).send("Caj nije pronadjen.");
  }
  const { naziv, cena } = req.body;
  caj.naziv = naziv;
  caj.cena = cena;
  res.status(200).send(caj);
});

//delete caj by id
app.delete("/cajevi/:id", (req, res) => {
  const cajIndex = teaData.findIndex((caj) => caj.id === parseInt(req.params.id));
  if (cajIndex === -1) {
    return res.status(404).send("Caj nije pronadjen.");
  }
  teaData.splice(cajIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}...`);
});
