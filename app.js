const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( {extended: false} ));
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

nunjucks.configure('views');

// if in the browser, you probably want to use an absolute URL
nunjucks.configure('/views');

nunjucks.configure({ autoescape: true });

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true
});
    
    var env = nunjucks.configure('views');    
app.set('view engine', 'html');
app.engine('html',nunjucks.render);

app.use('/', routes);
