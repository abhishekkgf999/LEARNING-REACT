import React from 'react'

const App = () => {
  function clickBtn(elem){
    console.log(elem.key);
  }
  return (
    <div>
       <input onKeyDown={clickBtn} type="text" placeholder='Enter your text' />
    </div>
  )
}

export default App
