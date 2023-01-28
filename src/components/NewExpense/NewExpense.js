import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const  NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddexpense(expenseData);
        setIsEditing(false)
    }
    const startEditingHandler = ()=>{
        setIsEditing(true);
    }

    const stopEditingHandler =()=>{
        setIsEditing(false)
    }
    return (
        <div className='new-expense'>
            {!isEditing &&<button onClick={startEditingHandler}>Add New Expense </button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler}
            />}  {/*폼에 데이터 전달(부모)*/}
        </div>
    );
};

export default NewExpense;
