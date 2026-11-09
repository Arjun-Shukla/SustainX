const express = require('express');
const DBConnect = require('../Config/db');
const signupRoute = require('../Routes/signup.route');
const loginRoute = require('../Routes/login.route');
const SubRoute = require('../Routes/subscription.route');
const SelectRoute = require('../Routes/select.route');
const UserRoute = require('../Routes/user.route');
const logOutRoute = require('../Routes/logout.route');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

DBConnect();

app.get('/', (req, res) => {
    res.send('Healthy');
});

app.use('/api', signupRoute);
app.use('/api' , loginRoute);
app.use('/api' , SubRoute);
app.use('/api' , SelectRoute);
app.use('/api' , UserRoute);
app.use('/api' , logOutRoute);


module.exports = app;