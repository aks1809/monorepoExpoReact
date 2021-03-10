import React from "react";
import { getWelcomeString } from "common/index";

const App = () => {
  return (
    <div>
      <p>{getWelcomeString("hi")}</p>
    </div>
  );
};

export default App;
