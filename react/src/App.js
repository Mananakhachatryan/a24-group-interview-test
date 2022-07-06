import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link to="/task-1">Task 1</Link>
      <br />
      <Link to="/task-2">Task 2</Link>
      <br />
      <Link to="/task-3">Task 3</Link>
      <br />
    </div>
  );
};

export default App;
