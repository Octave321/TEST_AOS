const { Model, DataTypes } = require("sequelize");

class User extends Model {}

module.exports = (sequelize) => {

    User.init({

        email: {
            type: DataTypes.STRING, 
            allowNull: false 
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
    }, { 
        sequelize: sequelize,
        underscored: true
        
    });

    return User

}