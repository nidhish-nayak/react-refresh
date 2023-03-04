import './GoalList.scss';

const GoalList = ({ goals }) => {
    return (
        <ul className="goal-list">
            {
                goals.map(goal => {
                    return (<li>{goal.text}</li>)
                })
            }
        </ul>
    )
}

export default GoalList;