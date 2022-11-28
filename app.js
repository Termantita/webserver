require('dotenv').config();
const hbs = require('hbs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Terma',
    title: 'Node Course'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Terma',
    title: 'Node Course'
  });
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Terma',
    title: 'Node Course'
  });
})



// app.get('/index', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// })

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });
 
// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname +  '/public/generic.html');
// });

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port} `);
});