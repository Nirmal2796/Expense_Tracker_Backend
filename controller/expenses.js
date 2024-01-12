const Expense=require('../model/expense');

exports.getExpenses=async(req,res,next)=>{
    try{
        const expenses=await Expense.findAll();
        res.status(200).json(expenses);       
    }
    catch(err){
        console.log(err);
    }
}


exports.postExpenses=async(req,res,next)=>{
    try{

        const category=req.body.category;
        const description=req.body.description;
        const amount=req.body.amount;

        

        const expense=await Expense.create({
            category:category,
            description:description,
            amount:amount
        });
        res.status(201).json({newExpense:expense});
    }
    catch(err){
        console.log(err);
    }
}


exports.deleteExpense = async (req,res,next)=>{

    try{

        const id=req.params.id;
    
        // console.log(id);
    
        const expense = await User.findByPk(id);
        expense.destroy();
        res.sendStatus(400);
    }
    catch(err){
        console.log(err);
    }
}


exports.editExpense = async (req,res,next)=>{

    try{

        const id=req.params.id;
        const expense=await Expense.findByPk(id);
        res.json({expense:expense});
    }
    catch(err){
        console.log(err);
    }
}


exports.editPostExpense = async (req,res,next)=>{

    try{

        const id=req.body.id;
        const category=req.body.category;
        const description=req.body.description;
        const amount=req.body.amount;

        
        const expense=await Expense.findByPk(id);

        expense.category=category;
        expense.description=description;
        expense.amount=amount;

        expense.save();
        console.log(expense);

        res.json({expense:expense});
    }
    catch(err){
        console.log(err);
    }
}

