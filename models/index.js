var Sequelize = require('sequelize')
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
})

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        //defaultValue: 'this article is a stub, you can help by expanding it.'
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
},{
    getterMethods: {
        route(){
            return '/wiki/' + this.urlTitle;
        }
    },
    hooks:{
        beforeValidate: (page)=>{
            page.urlTitle =  page.title.replace(/\s+/g,'_').replace(/\W/g, '');
            }
        }
    }

);

var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
})

module.exports = {
    Page,
    User,
    db
}
