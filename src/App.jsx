import React from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList.component';

const App = () => {

  const courseGoals = [
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn about the Topics" },
    { id: "cg3", text: "Refresh React" },
  ]

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  )
}

export default App;
