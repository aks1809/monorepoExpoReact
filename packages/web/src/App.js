import React from "react";
import { getWelcomeString } from "@root/common/index";

const App = () => {
  return (
    <div>
      <p>{getWelcomeString("hi")}</p>
    </div>
  );
};

export default App;
