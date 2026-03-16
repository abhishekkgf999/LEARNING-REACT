import React, { useState } from 'react'

/*
# 1️⃣ Concept: What is Local Storage?

Local Storage is a small storage space inside the browser where you can save data permanently.

The data stays even if:

* the page refreshes 🔄
* the browser closes ❌
* the computer restarts 💻

Think of it as a tiny database inside the browser.

Browser
 ├── UI
 ├── JavaScript
 └── Local Storage  ← data saved here

---

# 2️⃣ The "Why": What problem does it solve?

Imagine a Todo App.

You add tasks:

Buy milk
Study React
Go to gym

Then you refresh the page…

❌ Without Local Storage
All tasks disappear.

✅ With Local Storage
Tasks persist because they were saved in the browser.

So the flow becomes:

User adds task
      ↓
Save task in Local Storage
      ↓
Page refresh
      ↓
React reads Local Storage
      ↓
Tasks appear again

---

# 3️⃣ Code Sandbox (Plain JavaScript First)

### Save data :- localStorage.setItem("username", "Abhishek");


### Get data :- localStorage.getItem("username");


### Remove data :- localStorage.removeItem("username");


### Clear everything :- localStorage.clear();

Important thing:

⚠️ Local Storage stores everything as strings.

---

# 🧱 Lego Analogy

Think of your React app like a game.

* State (`useState`) → temporary memory (RAM)
* Local Storage → save file on disk

State → temporary
Local Storage → permanent

---

# ⚠️ Important React Tip

When storing objects or arrays, you must convert them.

Because Local Storage only stores strings.

Example:

### Save array :- localStorage.setItem("tasks", JSON.stringify(tasks));

### Read array :- const tasks = JSON.parse(localStorage.getItem("tasks"));

*/

const App = () => {
  const[name, setName] = useState('');

  const saveName = () => {
    localStorage.setItem("name", name);
  };

  const loadName = () => {
    const savedName = localStorage.getItem("name");
    setName(savedName);
  }

  const user = {
    username: 'Sarthak',
    age: 18,
    city: 'Bhopal'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))

  console.log(usera);

  return (
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={saveName}>Save</button>
      <button onClick={loadName}>Load</button>
    </div>
  )
}

export default App
