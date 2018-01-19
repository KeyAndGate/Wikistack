var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

// page model
{
    title: Sequelize.STRING,
    urlTitle: Sequelize.STRING,
    content: Sequelize.TEXT,
    status: Sequelize.BOOELEAN
}

// user model
{
    name: Sequelize.STRING,
    email: Sequelize.STRING
}
