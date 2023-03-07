import './GoalList.styles.scss';

const GoalList = ({ goals }) => {

    return (
        <ul className="goal-list">
            {
                goals.map(goal => {
                    return (<li key={goal.id}>{goal.text}</li>)
                })
            }
        </ul>
    )
}

export default GoalList;