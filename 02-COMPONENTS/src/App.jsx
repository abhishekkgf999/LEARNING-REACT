import React from "react";
import Card from "./components/card.jsx"
import NavBar from "./components/Navbar.jsx";

/*

#What are Components in React?

A component is a reusable, independent piece of UI in React.

> React applications are built by combining multiple components.

---

#Why Components are Important?

* Reusability ♻️
* Better code organization
* Easy maintenance
* Scalable applications

---

#Types of Components in React

## 🔹 1. Functional Components (Most Used)

# What it is

A JavaScript function that returns JSX.

example
function Welcome() {
  return <h1>Hello React</h1>;
}

# Using Props

function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

<Welcome name="Abhishek" />

✔ Simple
✔ Faster
✔ Hooks supported

---

## 🔹 2. Class Components (Older Style)

# What it is

A JavaScript class that extends React.Component.

Example

class Welcome extends React.Component {
  render() {
    return <h1>Hello React</h1>;
  }
}


⚠️ Mostly replaced by functional components + hooks.

---

#Component Rules (Very Important)

* Component names must start with Capital letter
* Must return JSX
* One component = one responsibility

#Component Composition (Component inside Component)

function Header() {
  return <h1>My App</h1>;
}

function App() {
  return (
    <>
      <Header />
      <p>Welcome</p>
    </>
  );
}

One-Line Interview Answer

> Components are reusable building blocks of a React application that return JSX to define UI.

*/

/*
Real DOM  → actual webpage in the browser 
Virtual DOM → lightweight JS representation of it //React creates a JavaScript copy of this structure in memory.


Updating the Real DOM is slow.

If we updated the DOM directly for every small change, the page could become very slow.

✅ With React Virtual DOM:

1. Create a new Virtual DOM
2. Compare it with the previous one
3. Find exactly what changed
4. Update ONLY that element in the real DOM

This comparison process is called Diffing.

Old Virtual DOM
        ↓
New Virtual DOM
        ↓
Find difference
        ↓
Update only the changed part in Real DOM

React does NOT update the DOM directly when state changes.

State change
   ↓
New Virtual DOM
   ↓
Diffing
   ↓
Minimal Real DOM update
*/

const App = () => {
  const user = "Abhishek"
  return (
    <div>
      <NavBar/>
      <Card/>
    </div>
  )
}

export default App;