require('dotenv').config();

const app = require('./connection');

app.listen(process.env.PORT);