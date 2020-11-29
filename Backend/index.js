const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');

const listSpots = require('');

const app = express();
const port = process.env.PORT || 3020;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const database = process.env.SpotsDB || '';

app.use(cors());
app.use('/', spotsRoutes);

app.listen(port, () => {
  console.log(`server is running on por ${port}`);
});
