const express = require("express");
const connection = require('./connection');

const auth = require('./routes/auth')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', auth)

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server connected to ${port}`);
});
