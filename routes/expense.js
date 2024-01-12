const express=require('express');

const expenseController=require('../controller/expenses');

const router=express.Router();

router.get('/',expenseController.getExpenses);

router.post('/add-expense',expenseController.postExpenses);

router.delete('/delete/:id',expenseController.deleteExpense);

router.get('/edit/:id',expenseController.editExpense);

router.post('/edit-expense',expenseController.editPostExpense);


module.exports=router;