import React from "react";

const App = () => {
  return (
    //Fragments let you group multiple JSX elements without adding an extra DOM node. => <></>
    <>
      <div id="dad">
        <h1 id="child1">Hello</h1>
        <h2 id="child2">Hello</h2>
      </div>
      <div id="chacha"></div>
    </>
  )
}

export default App;