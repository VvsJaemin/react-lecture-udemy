import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = props => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">found no expenses</h2>
    }
    return (
        <ul className="expenses-list">
            { props.items.map((expense) =>
            (
            <ExpenseItem
                key={expense.id} // 항상 key를 가지는게 좋다
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />))};
        </ul>
    );
};

export default ExpensesList;
