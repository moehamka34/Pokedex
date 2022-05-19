const express = require('express');
const methodOverride = require("method-override");
const pokemon = require('./models/pokemon.js');
const app = express();
const Pokemon = require('./models/pokemon.js');
const port= 3000;
// middleware
app.use(methodOverride("_method"));


// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { data: Pokemon});
});

//NEW

app.get("/pokemon/new", (req, res) => {
    res.render('new.ejs')
})



// DELETE

app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1) /
    res.redirect("/pokemon")
  });



//UPDATE
app.put("/pokemon/:id", (req, res) => {
    
    
    pokemon[req.params.id] = req.body 
    res.redirect("/pokemon") 
  })



//CREATE
app.post("/pokemon", (req, res) => {
    
    pokemon.push(req.body)
    console.log(pokemon)
    res.redirect("/pokemon") 
  })



//EDIT

app.get("/pokemon/:id/edit", (req, res) => {
    res.render(
      "edit.ejs", 
      {
       
        data: Pokemon[req.params.id], 
        index: req.params.id, 
      }
    )
  })




// SHOW
app.get('/pokemon/:id', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id] });
});






app.listen(port, () => {
    console.log("listening on port", port);
});