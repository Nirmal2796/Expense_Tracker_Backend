const express=require('express');

const cors=require('cors');


const app=express();


const bodyParser=require('body-parser');

const sequelize=require('./util/database');

const expenseRouter=require('./routes/expense');

app.use(cors());

app.use(bodyParser.json({extended:false}));

app.use(expenseRouter);



sequelize.sync()
.then((result)=>{
    app.listen(3000);
})
.catch(err=>console.log(err));