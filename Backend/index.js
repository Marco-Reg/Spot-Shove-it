const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connect } = require('mongoose');

const userProfile = require('./src/models/userProfile');
const userRoutes = require('./src/routes/userRoutes')(userProfile);

const app = express();
app.use(cors());
const port = process.env.PORT || 3020;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const database = process.env.spotsDB || 'mongodb://localhost/spotshoveit';
connect('mongodb://localhost/spotshoveit');
app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`server is running on por ${port}`);
});
