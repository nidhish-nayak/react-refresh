import React from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList.component';
import NewGoal from './components/NewGoal/NewGoal.component';

const App = () => {

  const myGoals = [
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn about the Topics" },
    { id: "cg3", text: "Refresh React" },
  ];

  const addCourseHandler = (course) => {
    myGoals.push(course);
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal addCourse={addCourseHandler} />
      <GoalList goals={myGoals} />
    </div>
  )
}

export default App;
