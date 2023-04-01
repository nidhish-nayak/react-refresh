import { useState } from 'react';
import './NewGoal.styles.scss';

const NewGoal = ({ addCourse }) => {
    const [newgoal, setNewgoal] = useState({});

    const inputHandler = (event) => {
        setNewgoal(
            {
                id: Math.random().toString(),
                text: (event.target.value).toString()
            })
    }

    return (
        <form className='new-goal' onSubmit={addCourse(newgoal)}>
            <input
                type='text'
                placeholder='Type Here'
                onChange={inputHandler}
            />
            <button type='submit'>Add Goal</button>
        </form>
    )
}
export default NewGoal;