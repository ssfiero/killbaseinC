const config = require('./knexfile.js')['development'];
// console.log('Envir: ', process.env.ENVIRONMENT);
const knex = require('knex')(config);
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// middleware
let morgan = require('morgan');
let bodyParser = require('body-parser');
let methodOverride = require('method-override');


app.disable('x-powered-by');
app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: true }));
// method-override middleware
app.use(methodOverride('_method'))


// access static resources (images/css) in the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));


// access the templating view files in the 'view folder'
app.set('views', './views');
// use the templating engine ejs
app.set('view engine', 'ejs');



let assassinsroutes = require('./routes/assassinsroutes.js');
let contractsroutes = require('./routes/contractsroutes.js');
let assassincontractsroutes = require('./routes/assassincontractsroutes.js');


app.use(assassinsroutes);
app.use(contractsroutes);
app.use(assassincontractsroutes);



// render home page
app.get('/', function(req, res) {
  res.render('home.ejs');
});



app.use(function(req, res) {
  res.sendStatus(404);
});



app.listen(port, function() {
  console.log('Listening on port', port);
});






module.exports = app;
