const express = require('express');
const app = express();
const routes = require('./routes');

// Where your server and express app are being defined:

var models = require('./models')

// ... other stuff

models.User.sync({})
    .then(function () {
        return models.Page.sync({force: true})
    })
    .then(function () {
        // make sure to replace the name below with your express app
        app.listen(3000, function () {
            console.log('Server is listening on port 3000!')
        })
    })
    .catch(console.error)

app.use('/',routes);
