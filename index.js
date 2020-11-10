const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect to databse
connectDB();

app.use(express.json({extended: false}));   //Allows us to accept data into our api

//Define routes
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/url'));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, ()=> console.log("Server running on post " + PORT));