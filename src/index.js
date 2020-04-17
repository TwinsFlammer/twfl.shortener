const express = require('express');
const api = require('./api');

const app = express();

app.get('/:name', async (req, res) => {
  const {
    name
  } = req.params;

  const shorted = await api.get(`/short/${name}`);

  return res.status(301).redirect(shorted.url);
});

app.listen(8080);