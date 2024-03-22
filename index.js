const { error } = require('console');
const express = require('express')
const mongoose = require('mongoose');
const app = express()


app.get('/', function (req, res) {
    res.send('Hello World');
  });
  
  
  mongoose.connect("mongodb+srv://aliasadiq2003:TTzYoSHGEAgNlr1s@dbmongo.aay4cbs.mongodb.net/?retryWrites=true&w=majority&appName=DBMongo")
  .then(() =>{
    console.log("conenction is auccessfully!");
    app.listen(3000, ()=>{
        console.log("Server is running on port 3000");
      });
  })
  .catch((error) =>{
    console.log("conenction failed!"+ error);
  });
