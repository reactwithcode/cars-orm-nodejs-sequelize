// 1a
// npm i express express-validator dotenv pg pg-hstore sequelize --save & npm i nodemon --save-dev
const express = require('express');
const app = express();
// 2a
const carsRoute = require('./routes/toyota.route');

// 1b
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 2b
app.use('/cars', carsRoute);

app.listen(port, () => {
    if(process.env.ENV == 'DEV') {
        console.log('This is development server');
    } else if(process.env.ENV == 'PROD') {
        console.log('This is production server');
    } else {
        console.log(`ENV tidak terbaca`);
    }
    console.log(`app is running on port ${port}`);
})