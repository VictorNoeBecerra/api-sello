const express = require('express')
const app = express()

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


const port =  normalizePort(process.env.PORT || '3000');
app.set('port', port);
app.get('/', (req, res) => {
  res.send('Hello World from !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})