import React, { useState } from "react";

const withHeight = (Component) => {
  return (props) => {
    const [boxHeight, setBoxHeight] = useState(60);

    window.setDivHeight = (height) => setBoxHeight(height);

    return <Component {...props} boxHeight={boxHeight} />;
  };
};

export default withHeight;
