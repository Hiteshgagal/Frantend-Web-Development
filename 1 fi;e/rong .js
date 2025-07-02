const express = require("express")
const path = require("path");  // not see in the page
const app = express();
const port = 90;
//for serving static file

app.use('/static', express.static('static'))

//set the templet engin asc pug
app.set('view engine', 'pug')

//set the views directory
app.set('views', path.join(__dirname, "views"))

// our pug demo endpoint
app.get("/demo", (req, res) => {
     res.status(200).render('/demo' ,{ title: 'hey hitesh', message:'hello there and thanks of telling me how to use pug!' })
});
app.get("/", (req, res)=>{
      res.status(200).send("This is my home page express app with Hitesh");
      });

app.get("/about", (req, res)=>{
      res.send("This is about page of my page express app with Hitesh");
});

app.post("/about", (req, res)=>{
      res.send("This is about page of my first express app with Hitesh");
});

app.get("/this", (req, res)=>{
      res.status(404).send("This page is not found");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});