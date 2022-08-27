const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', 'ejs')

app.use('/css', express.static(__dirname+'/css'))
app.use('/js', express.static(__dirname+'/js'))
app.use('/assets', express.static(__dirname+'/assets'))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.render("login", {error:""})
});

app.post('/login', (req, res) => {
  if (req.body.email == "admin@email.com" && req.body.password == "admin") {
    res.redirect("/home")
  } else { 
    res.render("login",{error: "Invalid email or password"})
  }
});


app.get('/home', (req, res) => {
  res.render("home")
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});