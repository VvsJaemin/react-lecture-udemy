import React, {useState} from 'react';
import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    //props로 컴포넌트 전달 - 무상태 컴포넌트
    //useState 사용 - 상태 컴포넌트
    const [filterYear, setFilterYear] = useState('2023');

    const filterChangeHandler = selectYear => {
        console.log(selectYear);
        setFilterYear(selectYear); // 자식 컴포넌트인 ExpenseFilter로 전달
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
            <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/>
        </Card>
    );
};

export default Expenses;
