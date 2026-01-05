import React, { useState } from "react";

/* -----------------------------------------------------
   🔹 WHAT ARE HOOKS?
   -----------------------------------------------------
   - Hooks are special functions in React
   - They allow function components to use:
     → state
     → lifecycle features
     → context
     → refs
   - Hooks always start with "use"
   Example: useState, useEffect, useContext
----------------------------------------------------- */

/* -----------------------------------------------------
   🔹 WHY HOOKS?
   -----------------------------------------------------
   Before hooks:
   - State & lifecycle only in class components
   - More boilerplate, harder to manage

   After hooks:
   - Clean, readable function components
   - Logic reuse becomes easy
----------------------------------------------------- */

/* -----------------------------------------------------
   🔹 RULES OF HOOKS (IMPORTANT)
   -----------------------------------------------------
   1. Always call hooks at the TOP LEVEL
   2. Do NOT use hooks inside:
      - loops
      - conditions
      - nested functions
   3. Use hooks ONLY inside React function components
----------------------------------------------------- */

/* =====================================================
   1️⃣ useState – STATE MANAGEMENT
   ===================================================== */

/*
   useState is used to store and update data
   When state changes → component re-renders

   Syntax:
   const [state, setState] = useState(initialValue);
*/

/*
Example:

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // state variable

  // count  -> current value
  // setCount -> function to update count

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
*/

/* =====================================================
   2️⃣ useEffect – SIDE EFFECTS
   ===================================================== */

/*
Side Effects include:
- API calls
- Timers
- DOM manipulation
- Event listeners
*/

/*
Syntax:
useEffect(() => {
  // side effect code
}, [dependencies]);
*/

/* 🔹 Case 1: Runs on EVERY render */
/*
useEffect(() => {
  console.log("Rendered");
});
*/

/* 🔹 Case 2: Runs ONLY ONCE (on mount) */
/*
useEffect(() => {
  console.log("Component Mounted");
}, []);
*/

/* 🔹 Case 3: Runs when dependency changes */
/*
useEffect(() => {
  console.log("Count changed");
}, [count]);
*/

/* 🔹 Cleanup Function */
/*
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  // cleanup runs on unmount
  return () => clearInterval(timer);
}, []);
*/

/* =====================================================
   3️⃣ useContext – AVOID PROP DRILLING
   ===================================================== */

/*
Problem:
Passing props through many components = PROP DRILLING

Solution:
Context API + useContext
*/

/*
Steps:

1. Create Context
   const MyContext = createContext();

2. Provide Context
   <MyContext.Provider value={data}>
     <App />
   </MyContext.Provider>

3. Consume Context
   const value = useContext(MyContext);
*/

/*
Used for:
- Theme (dark/light)
- Authentication
- Language
- Global settings
*/

/* =====================================================
   4️⃣ useRef – DOM ACCESS & MUTABLE VALUES
   ===================================================== */

/*
useRef does NOT cause re-render
Used for:
- Accessing DOM elements
- Storing values without re-render
*/

/* 🔹 DOM Access Example */
/*
const inputRef = useRef();

<input ref={inputRef} />

<button onClick={() => inputRef.current.focus()}>
  Focus Input
</button>
*/

/* 🔹 Mutable Value Example */
/*
const countRef = useRef(0);
countRef.current += 1;
*/

/*
Difference:
useState → re-render
useRef   → no re-render
*/

/* =====================================================
   5️⃣ useMemo – OPTIMIZE CALCULATIONS
   ===================================================== */

/*
Used to memoize (remember) expensive calculations
Prevents unnecessary recalculation
*/

/*
Example:
const result = useMemo(() => {
  return heavyCalculation(num);
}, [num]);
*/

/*
Use only when:
- Heavy logic
- Performance issue
*/

/* =====================================================
   6️⃣ useCallback – OPTIMIZE FUNCTIONS
   ===================================================== */

/*
Functions recreate on every render
useCallback memorizes the function
*/

/*
Example:
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
*/

/*
Mostly used with:
- React.memo
- Child components
*/

/* =====================================================
   7️⃣ useReducer – COMPLEX STATE LOGIC
   ===================================================== */

/*
Used when:
- Multiple related states
- Complex state updates
*/

/*
Example:

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

dispatch({ type: "INC" });
*/

/*
Similar to Redux (but simpler)
*/

/* =====================================================
   8️⃣ CUSTOM HOOKS – REUSABLE LOGIC
   ===================================================== */

/*
Custom Hook = Your own hook
Must start with "use"
*/

/*
Example:
function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    increment: () => setCount(count + 1)
  };
}
*/

/*
Usage:
const { count, increment } = useCounter();
*/

/*
useState     → state
useEffect    → side effects
useContext   → global data
useRef       → DOM / mutable values
useMemo      → optimize calculations
useCallback  → optimize functions
useReducer   → complex state
Custom Hook  → reuse logic
*/

/* =====================================================
   ✅ REVISION DONE
   ===================================================== */

const App = () => {

  const [num, setNum] = useState(0);

  function increment(){
    setNum(num+1);
  }

  function decrement(){
    setNum(num-1);
  }

  function JumpByFive(){
    setNum(num+5);
  }

  function BackByFive(){
    setNum(num-5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={BackByFive}>Back by 5</button>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={JumpByFive}>Jump by 5</button>

    </div>
  );
};

export default App;
