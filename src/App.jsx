import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList.component';
import NewGoal from './components/NewGoal/NewGoal.component';

const App = () => {

  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn about the Topics" },
    { id: "cg3", text: "Refresh React" },
  ]);

  const addGoal = (myGoals) => {
    setCourseGoals(myGoals);
    console.log(courseGoals);
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal goals={courseGoals} addGoalToList={addGoal} />
      <GoalList goals={courseGoals} />
    </div>
  )
}

export default App;
