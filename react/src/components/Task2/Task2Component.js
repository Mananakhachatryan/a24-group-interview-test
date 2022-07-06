import React, { useState } from "react";
import "../../App.scss";

const Task2 = () => {
  const [boxHeight, setBoxHeight] = useState(20);

  return (
    <div className="box" style={{ height: `${boxHeight}px` }}>
      <span>
        <input
          type="text"
          onKeyPress={(e) => setBoxHeight(e.target.value + e.key)}
        />
      </span>
    </div>
  );
};

export default Task2;
