const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('get', req);
  res.send('Hello World get!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

router.post('/test', (req, res) => {
  //To access POST variable use req.body()methods.
  // console.log(req);
  const responseBody = {
    text: 'Hello World post!',
  };
  res.send('responseBody');
  console.log('---------' + new Date());
  console.log(req.body);
  console.log(JSON.parse(JSON.stringify(req.body)));
});

// add router in the Express app.
app.use('/', router);
