import React, {useState} from 'react';
import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import expenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    //props로 컴포넌트 전달 - 무상태 컴포넌트
    //useState 사용 - 상태 컴포넌트
    const [filterYear, setFilterYear] = useState('2022');

    const filterChangeHandler = selectYear => {
        console.log(selectYear);
        setFilterYear(selectYear); // 자식 컴포넌트인 ExpenseFilter로 전달
    }

    const filExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() == filterYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList items={filExpenses}/>
        </Card>
    );
};

export default Expenses;
