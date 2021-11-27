const express = require("express");
const app = express();
const PORT = 3000 | process.env.PORT;
app.use(express.json());

let fakedb = [
  {
    id: 1,
    name: "John",
    age: 12,
  },
  {
    id: 2,
    name: "Ronny",
    age: 14,
  },
  {
    id: 3,
    name: "Alex",
    age: 20,
  },
];

app.post("/create", (req, res) => {
  fakedb.push(req.body);
  return res.json({
    message: "Data created",
  });
});

app.get("/get", (req, res) => {
  return res.json(fakedb);
});

app.get("/get/:id", (req, res) => {
  let filteredData = fakedb.filter((v, i) => +v.id === +req.params.id);
  return res.json({
    data: filteredData,
  });
});

app.delete("/delete/:id", (req, res) => {
  delete fakedb[+req.params.id - 1];
  return res.json({
    data: fakedb,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
