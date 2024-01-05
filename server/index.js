const express = require("express");
const cors = require("cors");

//Port 8000

const todoList = [
  {
    id: 1,
    taskName: "Code",
    status: "done",
  },
  {
    id: 2,
    taskName: "Test",
    status: "not finished",
  },
  {
    id: 3,
    taskName: "Design",
    status: "not finished",
  },
  {
    id: 4,
    taskName: "Test MindX",
    status: "not finished",
  },
];

const PORT_NUMBER = 8000;
//Creeate app
const app = express();
app.use(express.json());
app.use(cors());

app.get("/todos", (req, res) => {
  res.json(todoList);
});

app.post("/todo", (req, res) => {
  const payload = req.body;
  todoList.push(payload);
  res.send({
    message: "Create task success",
    data: todoList,
  });
});

//app lang nghe o port 8000
app.listen(PORT_NUMBER, () => {
  console.log(`Server running in port ${PORT_NUMBER}`);
});
