const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const chefData = require('./chef-server-data.json');
const chefServer = require('./chef-server.json');
const slide = require('./chef-slide.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Chef Recipe data is running');
});
app.get('/chefRecipes', (req, res) => {
  res.send(chefData);
});
app.get('/slides', (req, res) => {
  res.send(slide);
});
app.get('/chefs', (req, res) => {
  res.send(chefServer);
});

app.get('/chefRecipes/:id', (req, res) => {
  const id = req.params.id;
  const item = chefData.find((pd) => pd.id === id);
  if (!item) {
    res.status(404).send('Recipe not found');
  } else {
    res.send(item);
  }
});

app.get('/slides/:id', (req, res) => {
    const id = req.params.id;
    const item = slide.find((pd) => pd.id === id);
    if (!item) {
      res.status(404).send('Chef not found');
    } else {
      res.send(item);
    }
  });
  
app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  const item = chefServer.find((pd) => pd.id === id);
  if (!item) {
    res.status(404).send('Chef not found');
  } else {
    res.send(item);
  }
});


app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
