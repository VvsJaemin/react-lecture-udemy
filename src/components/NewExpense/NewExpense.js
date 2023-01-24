import React from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddexpense(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />  {/*폼에 데이터 전달(부모)*/}
        </div>
    );
};

export default NewExpense;
