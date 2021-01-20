const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('aos_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    underscored: true,
    define: {
       underscored: true,
    }
});  

let User = require('./model/User')(sequelize)


sequelize.sync({
    alter: true
})

module.exports = {
    sequelize: sequelize,
    User: User
}