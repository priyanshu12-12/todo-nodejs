const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

const insert = require("./insertDb");
const find = require("./findDb");


app.get("/", async(req, res) => {
  let result=await find();
  let taskFromFind=result.map(item=>item.task)
  let taskId=result.map(item=>item._id)
  context = {
    task: taskFromFind,
    taskId:taskId
  };
  res.render("index.ejs", context);
});


app.post("/", (req, res) => {
  var task = req.body.text;
  insert(task);
  res.redirect("/");
});

const deleteDatabase=require('./deleteDb')

app.get('/deleteItem/:id',(req,res)=>{
  let i=req.params.id;
  deleteDatabase(i);
  res.redirect('/')
})


app.listen(8000);
