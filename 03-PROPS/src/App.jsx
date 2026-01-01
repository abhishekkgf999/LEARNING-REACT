import React from "react";
import Card from "../components/Card";

/*
1️⃣ What are Props?

Brief definition:
Props (properties) are read-only inputs passed from a parent component to a child component.

> Props help components receive data and become reusable.

---

 2️⃣ Why Props are Needed?

* Pass data between components
* Make components reusable
* Keep components dynamic
* Follow one-way data flow (parent → child)

---

 3️⃣ Basic Props Example

# Parent Component

function App() {
  return <Welcome name="Abhishek" />;
}

# Child Component

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

✔ name is a prop
✔ props is an object

---

 4️⃣ Props with Destructuring (Recommended)

function Welcome({ name }) {
  return <h1>Hello {name}</h1>;
}

✔ Cleaner
✔ More readable

---

 5️⃣ Multiple Props Example

function Profile({ name, age }) {
  return (
    <p>
      {name} is {age} years old
    </p>
  );
}

<Profile name="Abhishek" age={21} />

---

 6️⃣ Props are Read-Only (Very Important)

❌ Wrong (Not Allowed):

props.name = "Rahul";


✅ Correct:

* Props cannot be modified
* Use state if data needs to change


One-Line Interview Answer

> Props are read-only inputs passed from parent to child components to make React 
  components reusable and dynamic.

*/

const App = () => {
  return (
    <div className="parent">
      <Card user = "Abhishek" age = {22}/>
      <Card user = "Varun" age = {22}/>
    </div>
  )
}

export default App;

