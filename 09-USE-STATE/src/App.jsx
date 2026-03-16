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

# 1️⃣ Concept: What is `useState`?

`useState` is a React Hook that lets a component remember data and update the UI when that data changes.

Think of it as memory for a component.

Without `useState`, a component cannot remember anything between renders.

Example of things stored in state:

* Counter value
* Form input
* Whether a modal is open
* API data

So simply:


useState → gives memory to a component


---

# 2️⃣ The "Why": What problem does it solve?

In normal JavaScript:

let count = 0;
count = count + 1;

The variable changes, but the UI does NOT update automatically.

React needs a way to:

1. Store a value
2. Know when that value changes
3. Re-render the UI

That’s exactly what `useState` does.


State changes
      ↓
React re-renders component
      ↓
UI updates


---

# 3️⃣ Code Sandbox (Minimal Example)

### Counter Example


import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;


---

# 4️⃣ Breaking It Down (Important)

This line is the key: const [count, setCount] = useState(0);


Think of it like unpacking a box.

| Part          | Meaning                  |
| ------------- | ------------------------ |
| `count`       | current value            |
| `setCount`    | function to update value |
| `useState(0)` | initial value            |

So React gives us:


count → current state
setCount → function to update state


---

### What happens when button is clicked?


setCount(count + 1)
        ↓
state updates
        ↓
React creates new Virtual DOM
        ↓
Diffing
        ↓
UI updates


Now you can see how `useState` connects to Virtual DOM.

---

# 🧱 Lego Analogy

Think of a component as a small machine.

`useState` is the internal memory chip of that machine.

When memory changes → machine updates its display.

---

# ⚠️ Beginner Mistake

Never do this:


count = count + 1 ❌


Always use:


setCount(count + 1) ✅


Because React only tracks updates through the setter function.


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
