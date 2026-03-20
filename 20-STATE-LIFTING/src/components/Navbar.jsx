import React from 'react'

const Navbar = (props) => {
    function changeTheme(){
        props.theme == 'light' ? props.setTheme('Dark') : props.setTheme('light');
    }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
