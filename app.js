var express = require('express');
var app = express();
var axios = require('axios');
var mongoose = require('mongoose')

app.use('/static', express.static("public"));
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")

// app.get('/', function(req,res){
//     axios.get('https://xkcd.com/614/info.0.json').then(function(response){
//         Todo.find(function(err, todo){
//             if(err){
//                 res.json({"Error:" : err})
//             } else {
//                 res.render("todo.ejs", {todoList: todo, comicData: response.data});
//             }
//         })
//     }).catch(function(error){
//         res.json({"Error:" : error})
//     })
//     //api call by comic number https://xkcd.com/614/info.0.json number (614) randomly generated
//     //min 1 max 2682
//  })
 

 app.get('/', function(req,res){
    res.render('todo.ejs')
 })

 app.get('/', function(req,res){
    res.send("Hello World")
 })


app.listen(3000, function(){
    console.log('App listening on port 3000')
})