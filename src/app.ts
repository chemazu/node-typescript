import express from 'express';
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const {getUsers} = require('./queries')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.get('/',getUsers)

// app.get('/users', (req, res) => {
//   res.send('Hello World!');
// });
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
