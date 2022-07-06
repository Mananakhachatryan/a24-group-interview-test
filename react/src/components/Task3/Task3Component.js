import React from "react";
import withHeight from "../../shared/hoc/withHeight";
import "../../App.scss";

const Task3 = ({ boxHeight }) => {
  return (
    <div className="box" style={{ height: `${boxHeight}px` }}>
      <span>
        <input
          type="text"
          onKeyPress={(e) => window.setDivHeight(e.target.value + e.key)}
        />
      </span>
    </div>
  );
};

export default withHeight(Task3);
