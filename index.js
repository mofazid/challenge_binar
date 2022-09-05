const express = require('express')
const bodyParser = require('body-parser');
const { usersDataGame } = require('./models');
const axios = require('axios');
const { get } = require('http');
const { text } = require('express');
const path = require('path')



const app = express()
const jsonParser = bodyParser.json()

app.set('view engine', 'ejs')
app.use('/css', express.static(__dirname+'/css'))
app.use('/js', express.static(__dirname+'/js'))




// SUPERADMIN LOGIN
app.get('/login', (req, res) => {
  res.render("login")
});

// SUPERADMIN LOGIN name = admin password = admin
app.post('/login', jsonParser, (req, res) => {
  const name = "admin"
  const password = "admin"

  if(name == (req.body.username) && password == (req.body.password)) {
    res.send("Authorized")
  }else{
    res.status(401).send("Unauthorized")
  }
})
      

// HOME PAGE
app.get('/home', async (req, res) => {
  await axios.get('http://localhost:3000/usersDataGame')
  .then(function (response) {
    res.render("home", {users:response.data})
    console.log(response.data);
  })
});

// CREATE USER
app.post('/home', jsonParser, async (req, res) => {
  try {
    const menu = await usersDataGame.create({
      name: req.body.name,
      password: req.body.password,
      age: req.body.age,
      city: req.body.city,
      game: req.body.game,
      wins: req.body.wins
    })
    res.status(201).send(menu)
  } catch (error) {
    res.status(400).send("UNABLE TO INSERT DATA")
  }
});


// DATA STATIS
app.get('/usersDataGame', async (req, res) => {
  try {
    const data = await usersDataGame.findAll()
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send("UNABLE TO GET DATA")
  }
});

//EDIT USER
app.put('/home/:id', jsonParser, async (req, res) => {
  try {
    const data = await usersDataGame.findByPk(req.params.id)
    data.name = req.body.name
    data.password = req.body.password
    data.age = req.body.age
    data.city = req.body.city
    data.game = req.body.game
    data.wins = req.body.wins
    await data.save()

    res.status(200).send(data)
  } catch (error) {
    res.status(400).send("UNABLE TO UPDATE DATA")
  }
});


// DELETE USER
app.delete('/home/:id', async (req, res) => {
  try {
    const data = await usersDataGame.findByPk(req.params.id)
    await data.destroy()

    res.status(200).send("DATA DELETED")
  } catch (error) {
    res.status(400).send("UNABLE TO DELETE DATA")
  }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

