const express = require('express');
const bodyParser = require('body-parser');
const macaddress = require('macaddress');
const myData = require('firebase');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const date = require('date-and-time');
const app = express();
const cors = require('cors');
const path = require('path');
app.use(cors({ origin: true }));
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
     res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

if(process.env.NODE_ENV === 'production'){
    const path  =  require('path');
    app.get('/*',(req, res)=>{
        res.sendFile(path.resolve(__dirname+'/client/build/index.html'))
    })
}

const firebaseConfig = {
    apiKey: "AIzaSyDAG1RvwN85zACzAXG7qVG76avN6cTV5uo",
    authDomain: "taibah-ef8a9.firebaseapp.com",
    databaseURL: "https://taibah-ef8a9.firebaseio.com",
    projectId: "taibah-ef8a9",
    storageBucket: "taibah-ef8a9.appspot.com",
    messagingSenderId: "818871054377",
    appId: "1:818871054377:web:ff5bd40205df0897c8ac38",
    measurementId: "G-SQ5NYJD1CM"
};

myData.initializeApp(firebaseConfig);

app.get('/api/reg', (req, res) => {

   (async () => {
      try {
          const noteSnapshot = await  myData.firestore().collection('clockIn').get();
          const notes = [];
          noteSnapshot.forEach(function (doc) {
            notes.push({
            id: doc.id,
            data: doc.data() });

          });
          res.json(notes)
          console.log(res.json(notes))
          return res.status(200).send(notes);
      } catch (error) {
          console.log(error);
          return res.status(500).send(error);
      }
    })();





  // macaddress.one((err, mac) => {
  //   myData.firestore().collection('clockIn').where('uid', '==', mac).limit(1).get()
  //   .then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       console.log('mac address', ':', doc.id, 'exists');
  //       console.log('Name', '=>', doc.data().name);
  //       let dat = doc.data().name;
  //       res.send({ express: 'mac addresses: ', dat})
  //     });
  //   })
  //   .catch((err) => {
  //     console.log('Error getting documents', err);
  //   }); 

  //   if (mac) {
  //     console.log( 'mac addresses: ', mac )
  //   } else {
  //     console.log( 'mac addresses is not valid ' )
  //   }  
  // });

  // res.send({ express: 'Hello From Express' });
});

app.post('/api/mac', (req, res) => {
  console.log(req.body.clockIn);

  console.log(req.body)
  console.log(process.env)
  
  if (req.body.clockIn) {
    macaddress.one((err, mac) => {
      if (mac) {
        console.log('mac addresses: ', mac);
      } else {
        console.log('mac addresses is not valid ')
      }  
    });
    console.log('The user clicked the button');
    console.log(req.body)
  } else {
    console.log('No button click!')
  }
  res.send(
    `
      I received your POST request. 
      This is what you sent me: ${req.body.clockIn}
    `,
  );

  if (req.body.clockIn) {
    let transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'testing@gmail.com',
        pass: 'testing'
      }
    }));

    const now = new Date();

    let mailOptions = {
      from: 'testing@gmail.com',
      to: 'testing@gmail.com',
      subject: "Today's Attendence Register",
      text: "Teacher's Name: " + ' ' + `${req.body.name}` + `\r\n` + 
          'Day of the week: ' + ' ' + `${date.format(now, 'dddd')}` + `\r\n` + 
          'Date: ' + ' ' + `${date.format(now, 'DD-MM-YYYY')}` + `\r\n` +
          'Time of Arrival: ' + ' ' +  `${date.format(now, 'HH:mm')}`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 
  } else {
    console.log('Send clock out');
    return null
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));