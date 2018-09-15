// MongoDB & Node.js Sample API

/* ====================================== */
// Express Configuration
/* ====================================== */
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({extended: true}));

// support parsing of application/json type post data
app.use(bodyParser.json());

const db = require('./api/data/db');


db.connect().then(function(db){
            const restaurantRoutes = require('./api/routes/restaurants');

            app.use('/', restaurantRoutes);

            app.use((request, response, next) => {
                response.status(200).json({
                    message: "You're becoming a hero!"
                });
            });

            // Start the web server
            app.listen(port, () => {
                console.log('Express.js server is listening on Port %s.', port);
            });

});

