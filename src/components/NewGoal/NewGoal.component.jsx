import { useState } from 'react';
import './NewGoal.styles.scss';

const NewGoal = ({ goals, addGoalToList }) => {
    const [count, setCount] = useState(4);
    const [goal, setGoal] = useState({ id: 'cg' + count, text: "Default Goal" });

    const changeHandler = (event) => {
        setGoal({ id: 'cg' + count, text: event.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let flag = 0;
        goals.map(i => {
            if (i.text === event.target.goalName.value) {
                alert("This goal is already added !!!");
                flag = 1;
            }
        })
        if (flag === 0) {
            setCount(count + 1);
            goals.push(goal);
            addGoalToList(goals);
        }
    }

    return (
        <form className='new-goal' onSubmit={submitHandler}>
            <input
                type='text'
                id='goalName'
                name='goalName'
                placeholder='Type Here'
                onChange={changeHandler}
            />
            <button type='submit'>Add Goal</button>
        </form>
    )
}
export default NewGoal;