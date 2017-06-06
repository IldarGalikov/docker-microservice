'use strict';

const express = require('express');
const bodyParser= require('body-parser');
// Constants
const PORT = 8080;

// App
const app = express();

var db
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://mongodb/node-db', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});
app.post('/quotes', (req, res) => {
  console.log(req.body);
})
app.get('/locations', (req, res) => {
  db.collection('locations').find().toArray(function(err, results) {
  	console.log(results)
  	res.send(results)
  // send HTML file populated with quotes here
		})
})


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
