import React from 'react'
import Button from './components/Button'
import Navbar from './components/Navbar'

/*
# 1️⃣ Concept: What is Context API?

Context API lets you share data across components without passing props manually at every level.

Think of it as a global data system inside React.

Without Context:
App → Parent → Child → Grandchild (props passed again and again)

With Context:
App → (Context)
        ↓
   Any component can access data directly


---

# 2️⃣ The "Why": What problem does it solve?

### ❌ Problem: Prop Drilling

<App user="Abhishek">
  <Parent user={user}>
    <Child user={user}>
      <Profile user={user} />
    </Child>
  </Parent>
</App>


😵 You keep passing user again and again even if only Profile needs it.

---

### ✅ Solution: Context API

Store data once → access anywhere

---

# 3️⃣ Code Sandbox (Minimal Example)

We’ll build a simple User Context.

---

## 🧱 Step 1: Create Context

import { createContext } from "react";

export const UserContext = createContext();

---

## 🧱 Step 2: Provide Data

import { UserContext } from "./UserContext";

function App() {
  return (
    <UserContext.Provider value="Abhishek">
      <Profile />
    </UserContext.Provider>
  );
}


---

## 🧱 Step 3: Consume Data

import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}

---

# 4️⃣ Breaking It Down

### 🧱 createContext()

Creates a global container

---

### 🧱 Provider

Supplies data to components

---

### 🧱 useContext()

Reads the data

---

# 5️⃣ Flow Visualization

Provider (value="Abhishek")
          ↓
     React Tree
          ↓
useContext() → gets "Abhishek"

---

# 🧱 Lego Analogy

Think of Context like WiFi in a building 📶

* Provider = WiFi router
* Components = devices
* useContext = connecting to WiFi

No wires (props) needed anymore

---

# ⚠️ Important Insight

Use Context when:

✅ Many components need same data
❌ Don’t use for small/local state

Examples:

* Auth user 👤
* Theme (dark/light) 🌙
* Language 🌍

---

# 🔗 Connection to What You Learned

* props → pass data manually
* children → pass UI
* Context API → share data globally

*/

const App = () => {
  return (
    <div>
      <Navbar/>
      <Button/>
    </div>
  )
}

export default App
