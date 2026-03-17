import React from "react";
import { useEffect } from "react";
import { useState } from "react";

/*
# 1️⃣ Concept: What is useEffect?

useEffect lets you run code *after* your component renders.

Think of it as:

"Do something AFTER the UI is shown"

Examples of “something”:

* API calls 🌐
* Local Storage access 💾
* Event listeners 🎧
* Timers ⏱️

---

# 2️⃣ The "Why": What problem does it solve?

React components should stay focused on UI.

But sometimes you need to:

* fetch data
* interact with browser
* run side operations

These are called side effects.

Without useEffect, you'd mix everything inside render → messy + bugs.

So React gives:

Render UI first
     ↓
Then run side effects


---

# 3️⃣ Code Sandbox (Basic Example)

### Run once when component loads

import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>Hello</h1>;
}

export default App;


---

# 4️⃣ Breaking It Down

useEffect(() => {
  // side effect code
}, [dependencies]);


| Part       | Meaning          |
| ---------- | ---------------- |
| () => {}   | function to run  |
| []         | dependency array |

---

# 5️⃣ 3 Important Cases (Very Important 🔥)

## 🟢 Case 1: Run only once


useEffect(() => {
  console.log("Run once");
}, []);


✔ Runs when component loads
✔ Used for API calls

---

## 🟡 Case 2: Run when value changes

useEffect(() => {
  console.log("Count changed");
}, [count]);


✔ Runs only when count changes

---

## 🔴 Case 3: Run on every render (⚠️ avoid)

useEffect(() => {
  console.log("Runs every time");
});


❌ No dependency array → runs again and again

---

# 6️⃣ Real Example (API + useEffect)

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return <div>{data.length} posts loaded</div>;
}

---

# 🧱 Lego Analogy

Think of a component like a room 🏠

* Render → room is built
* useEffect → after building, you:

  * turn on lights 💡
  * bring furniture 🪑
  * connect WiFi 📶

---

# ⚠️ Common Beginner Mistake

useEffect(() => {
  setCount(count + 1);
});

This causes:

Render → useEffect → setState → Render → useEffect → infinite loop 

Always control with dependencies.

---

# 🔗 Connection to What You Learned

* useState → stores data
* useEffect → reacts to changes / performs actions
* API calls → done inside useEffect
* LocalStorage → accessed inside useEffect
*/

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
     console.log("A ki value change ho gayi");
  }

  function bChanging() {
    console.log("B ki value change ho gayi");
  }

  useEffect(function(){
    aChanging();
  }, [a])

  useEffect(function() {
    bChanging();
  }, [b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() => setA(a + 1)}>Change A</button>
      <button onClick={() => setB(b - 1)}>Change B</button>
    </div>
  );
};

export default App;
