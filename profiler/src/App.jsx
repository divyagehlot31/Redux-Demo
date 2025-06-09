import React, { Profiler } from "react";

import "./App.css";
import WithUseMemo from "./components/WithUseMemo";
import WithoutUseMemo from "./components/WithoutUseMemo";

function App() {
  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) {
    console.log("id is", id);
    console.log("Phase is", phase);
    console.log("actualDuration", actualDuration);
    console.log("baseDuration", baseDuration);
    console.log("startTime", startTime);
    console.log("commitTime", commitTime);
  }
  return (
    <>
      {/* <Profiler id="with" onRender={onRender}> */}
      <WithUseMemo />
      {/* </Profiler> */}
      {/* <Profiler id="without" onRender={onRender}> */}
      <WithoutUseMemo />
      {/* </Profiler> */}
    </>
  );
}

export default App;
