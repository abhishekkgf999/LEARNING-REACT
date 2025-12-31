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