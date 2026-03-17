import React, { useEffect, useState } from 'react'
import axios from 'axios'

/*
# 1️⃣ Concept: What is API Calling?

API calling = fetching data from a server into your React app.

Example:

Your React App → API → Server → Data → UI updates

Think of it like:

🧱 Your app = customer
📦 API = delivery service
🏢 Server = warehouse

You request data, and the API delivers it.

---

# 2️⃣ The "Why": What problem does it solve?

Without APIs:

* Your app would have no dynamic data
* Everything would be hardcoded

With APIs:

* You can fetch:

  * user data
  * products
  * posts
  * weather, etc.

Example:

Open app
   ↓
Fetch data from API
   ↓
Store in state
   ↓
Render UI

---

# 3️⃣ Method 1: fetch (Built-in)

## ✅ Concept

fetch is a native JavaScript function (no installation needed).

---

## 🧪 Code Sandbox

jsx
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      {data.slice(0, 5).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;


---

## 🔍 Breakdown


useEffect → runs when component loads
fetch → calls API
res.json() → converts response to JS object
setData → store in state


---

# 4️⃣ Method 2: axios (Library)

## ✅ Concept

axios is a third-party library that makes API calls easier.

Install:

bash
npm install axios


---

## 🧪 Code Sandbox

jsx
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      {data.slice(0, 5).map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default App;


---

## 🔍 Breakdown

axios.get → calls API
res.data → directly gives response data
setData → store in state

---

# 5️⃣ fetch vs axios (Simple Comparison)

| Feature         | fetch                   | axios       |
| --------------- | ----------------------- | ----------- |
| Built-in        | ✅ Yes                  | ❌ No        |
| JSON conversion | ❌ manual (res.json())  | ✅ automatic |
| Error handling  | ❌ manual               | ✅ easier    |
| Code simplicity | 😐 medium               | 😊 cleaner  |

---

# 🧱 Mental Model


fetch → raw tool (more control, more work)
axios → smart tool (less work, cleaner code)


---

# ⚠️ Important React Insight

Always call APIs inside:

useEffect(() => { }, [])

Why?

Because:

Component renders
   ↓
API call happens once
   ↓
State updates
   ↓
UI updates


If you don’t use useEffect, API may call again and again (infinite loop).

*/

//fetch method
const App1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> res.json())
    .then((result)=> setData(result));
  }, []);

  return (
    <div>
      {data.slice(0, 5).map((item)=>{
        <p key={item.id}>{item.title}</p>
      })}
    </div>
  )
}

//axios method
const App = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);
  }

  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map((elem, idx) =>
          <h3>{idx} {elem.author}</h3>
        )}
      </div>
    </div>
  )
}

export default App
