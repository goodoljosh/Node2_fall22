var express = require('express');
var app = express();
var axios = require('axios');

app.get('/', function(req,res){
     res.send('https://xkcd.com/614/info.0.json')
    //api call by comic number https://xkcd.com/614/info.0.json number (614) randomly generated
    //min 1 max 2682
 })

app.listen(3000, function(){
    console.log('App listening on port 3000')
})