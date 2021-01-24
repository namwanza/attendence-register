const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const macaddress = require('macaddress');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const date = require('date-and-time');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
  macaddress.one((err, mac) => {
    if (mac) {
      res.send({ express: mac });
    }
  });
});

// Send all clocked in users details to admin's email
app.post('/api/clockin', (req, res) => {
   if (req.body.clockIn) {
      let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'test@gmail.com',
          pass: 'pass'
        }
      }));

      const now = new Date();

      let mailOptions = {
        from: 'Digital Staff Attendance Register',
        to: 'tissregister@gmail.com',
        subject: `${date.format(now, 'DD-MM-YYYY')}` + ' : ' + "ClockIn - Attendence Register",
        text: "Teacher's Name: " + ' ' + `${req.body.post}` + `\r\n` + 
            'Day of the week: ' + ' ' + `${date.format(now, 'dddd')}` + `\r\n` + 
            'Date: ' + ' ' + `${date.format(now, 'DD-MM-YYYY')}` + `\r\n` +
            'Time of Arrival: ' + ' ' +  `${date.format(now, 'HH:mm')}`
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          // console.log('Email sent: ' + info.response);
          return null
        }
      }); 
    } 
});


// Send all clocked out users details to admin's email
app.post('/api/clockout', (req, res) => {
   if (req.body.clockOut) {
      let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'test@gmail.com',
          pass: 'pass'
        }
      }));

      const now = new Date();

      let mailOptions = {
        from: 'Digital Staff Attendance Register',
        to: 'tissregister@gmail.com',
        subject: `${date.format(now, 'DD-MM-YYYY')}` + ' : ' + "ClockOut - Attendence Register",
        text: "Teacher's Name: " + ' ' + `${req.body.post}` + `\r\n` + 
            'Day of the week: ' + ' ' + `${date.format(now, 'dddd')}` + `\r\n` + 
            'Date: ' + ' ' + `${date.format(now, 'DD-MM-YYYY')}` + `\r\n` +
            'Time of Arrival: ' + ' ' +  `${date.format(now, 'HH:mm')}`
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          // console.log('Email sent: ' + info.response);
          return null
        }
      }); 
    }
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));