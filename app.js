var express = require('express');
var app = express();
var readlineSync = require('readline-sync');
const math = require('mathjs');
var alphabet = require('alphabet');
const hostname = '127.0.0.1';
const port = 3000;
var http = require('http').Server(app);
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/",function(req,res){
    res.render('index')
})
app.post('/calculate',function(req,res){
var input=req.body.input;

//console.log(req.body.input);
var calculate= math.eval(input);
console.log(calculate);

});



http.listen(3000, function () {
    console.log('listening on *:3000');
});