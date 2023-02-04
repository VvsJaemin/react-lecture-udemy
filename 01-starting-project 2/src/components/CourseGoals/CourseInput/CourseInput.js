import React, { useState } from 'react';
import styled from "styled-components";
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
//
// const FormControl = styled.div`
//   margin: 0.5rem 0; // 메인은 지운다
//
//   & label { //하위는 엠퍼센트로
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color : ${props => (props.invalid ? 'red' : 'black')};
//   }
//
//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     background: ${props=> props.invalid ? '#ffd7d7' : 'transparent'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }
//
//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
//
//
// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsVaild] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.valuetrim().length > 0) {
      setIsVaild(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsVaild(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      < div invalid={`${styles['form-control']} ${!isValid && styles.invalid}`}> {/*프로퍼티 접근*/}
        <label >Course Goal</label>
        <input  type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
