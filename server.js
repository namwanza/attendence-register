const express = require('express')
const app = express();
const port = 5050;

var macaddress = require('macaddress');

macaddress.one(function (err, mac) {
    if (mac == '10:7d:1a:3f:1b:0c') {
        console.log('Mac address is valid: %s', mac)
    } else {
        console.log("Mac address not valid: %s", mac);
    }  
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})