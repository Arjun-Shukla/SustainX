const express = require('express');
const DBConnect = require('../Config/db');
const signupRoute = require('../Routes/signup.route');
const loginRoute = require('../Routes/login.route');
const SubRoute = require('../Routes/subscription.route');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

DBConnect();

app.get('/', (req, res) => {
    res.send('Healthy');
});

app.use('/api', signupRoute);
app.use('/api' , loginRoute);
app.use('/api' , SubRoute);

module.exports = app;