const express = require('express');
const bodyParser = require('body-parser');
const macaddress = require('macaddress');
const myData = require('firebase');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

myData.initializeApp(firebaseConfig);

app.get('/api/register', (req, res) => {
  macaddress.one((err, mac) => {
    return myData.firestore().collection('clockIn').where('uid', '==', mac).limit(1).get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log('mac address', ':', doc.id, 'exists');
        console.log('Name', '=>', doc.data().name);
        return doc.data().name;
        // res.send({ express: 'mac addresses: ', doc})
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    }); 

    if (mac) {
      res.send({ express: 'mac addresses: ', mac})
    } else {
      res.send({ express: 'mac addresses is not valid '})
    }  
  });
});

app.post('/api/mac', (req, res) => {
  console.log(req.body.clockIn);
  // console.log(req.body.mac);
  if (req.body.clockIn) {
    // macaddress.one((err, mac) => {
    //   if (mac) {
    //     console.log('mac addresses: ', mac);
    //   } else {
    //     console.log('mac addresses is not valid ')
    //   }  
    // });
    console.log('The user clicked the button');
  } else {
    console.log('No button click!')
  }
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.clockIn}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));