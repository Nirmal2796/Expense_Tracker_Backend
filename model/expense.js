const Sequelize=require('sequelize');

const sequelize=require('../util/database');
const { type } = require('os');

const Expense=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
    
});

module.exports=Expense;