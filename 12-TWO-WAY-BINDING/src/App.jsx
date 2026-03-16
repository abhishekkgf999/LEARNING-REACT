import React, {useState} from 'react'

/* -----------------------------------------------------
   🔹 WHAT IS TWO-WAY BINDING?
   -----------------------------------------------------
   - UI updates State
   - State updates UI
   - Data flows in BOTH directions
*/

/* -----------------------------------------------------
   🔹 IMPORTANT CONCEPT
   -----------------------------------------------------
   - React follows ONE-WAY data flow
   - Two-way binding is MANUALLY implemented
   - Done using:
     → useState
     → value attribute
     → onChange handler
*/

/*
2️⃣ The "Why": What problem does it solve?

Imagine a form input field.

Without two-way binding:

-> User types something

-> But your program doesn't know the value

You would need to manually fetch the value from the DOM.

Example in vanilla JS:

document.querySelector("input").value

React avoids this by connecting the input directly to state.

So whenever the user types:

User types
     ↓
State updates
     ↓
UI stays in sync
*/

/* -----------------------------------------------------
   🔹 BASIC TWO-WAY BINDING EXAMPLE
   ----------------------------------------------------- */

/*
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}                    // state → UI
        onChange={(e) => setName(e.target.value)} // UI → state
      />

      <p>{name}</p>
    </>
  );
}
*/

/* -----------------------------------------------------
   🔹 FORMULA TO REMEMBER (EXAM READY)
   -----------------------------------------------------

   value={state}
   onChange={(e) => setState(e.target.value)}

*/

/* -----------------------------------------------------
   🔹 CONTROLLED COMPONENT
   -----------------------------------------------------
   - Input value is controlled by React state
   - Two-way binding = Controlled Component
*/

/* -----------------------------------------------------
   🔹 MULTIPLE INPUTS (SINGLE HANDLER)
   ----------------------------------------------------- */

/*
const [form, setForm] = useState({
  username: "",
  email: ""
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};
*/

/* -----------------------------------------------------
   🔹 CHECKBOX TWO-WAY BINDING
   ----------------------------------------------------- */

/*
const [checked, setChecked] = useState(false);

<input
  type="checkbox"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
*/

/* -----------------------------------------------------
   🔹 KEY POINTS (INTERVIEW)
   -----------------------------------------------------
   - React has NO automatic two-way binding
   - It is implemented manually
   - Uses controlled components
   - More control & predictable behavior
*/

/* -----------------------------------------------------
   ✅ QUICK ONE-LINER
   -----------------------------------------------------
   Two-way binding in React is achieved using controlled
   components where input value is bound to state and
   updated using onChange handlers.
----------------------------------------------------- */


const App = () => {

  const [title, setTitle] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault(); //prevent from page reloading after submission
    console.log("Form Submitted by", title);
    setTitle('');
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <input 
        type="text" 
        placeholder='Enter your name' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
