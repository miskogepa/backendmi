import express from "express";

const app = express();

const port = 3000;
app.use(express.json());

// array za teaData 
let teaData = [];
let nextId = 1;

app.post("/cajevi", (req, res) => {
    const { naziv, tip, cena } = req.body;
    const noviCaj = {
        id: nextId++,
        naziv,
        cena
    };
    teaData.push(noviCaj);
res.status(201).send(noviCaj);
})


app.listen(port, () => {
  console.log(`Server is running on port: ${port}...`);
});
