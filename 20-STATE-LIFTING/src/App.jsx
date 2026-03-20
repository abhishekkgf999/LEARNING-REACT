import React, { useState } from 'react'
import Navbar from './components/Navbar';

/*
========================================================
THEME TOGGLE (STATE LIFTING + PROPS)
========================================================

1️⃣ useState
- Used to store theme (light / dark)
- When theme changes → UI re-renders

2️⃣ State Lifting
- State is stored in parent (App)
- Child (Navbar) uses and updates it

3️⃣ Props
- Data passed from parent → child
- Here:
    theme     → value
    setTheme  → function to update state

4️⃣ Important Idea
- Parent controls the state
- Child can MODIFY state using function
*/

const App = () => {

  /*
  ----------------------------------------------------
  STATE
  ----------------------------------------------------
  theme → stores current theme
  */
  const [theme, setTheme] = useState('light');

  return (
    <div>

      <h1>Theme is {theme}</h1>

      {/* 
      Passing props to Navbar

      theme     → current value
      setTheme  → function to update theme

      */}
      <Navbar theme={theme} setTheme={setTheme} />

    </div>
  )
}

export default App