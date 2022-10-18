var express = require('express');
var app = express();
var axios = require('axios');
var mongoose = require('mongoose');
//const todoModel = require('./models/todo.model');
//const Todo = require('./models/todo.model');

app.use('/static', express.static("public")); 
app.set("view engine","ejs");
const Todo = require('./models/todo.model');
const mongoDB = "mongodb+srv://findley_joshua1:cyjQ2HdqfrCVst0m@cluster0.s3catnk.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error' , console.error.bind(console, "MongoDb connection error: "))

app.get('/', function(req,res){
   let comicData ={}
   let randomNum=Math.floor(Math.random() * 2682) + 1;;
   axios.get('https://xkcd.com/'+ randomNum +'/info.0.json').then(function(response){
      //comicData=response.data
      Todo.find(function(err,todo){
         if(err){
            res.json({"Error: ": err})
         } else {
            res.render('todo.ejs', {todoList: todo, comicData: response.data});
         }
      })
    })
 })
 

app.listen(3000, function(){
    console.log('App listening on port 3000')
})