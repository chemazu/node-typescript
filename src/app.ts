const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
// const {getUsers} = require('./queries')
const register= require('./api/accounts/register')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/accounts/register', register)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
