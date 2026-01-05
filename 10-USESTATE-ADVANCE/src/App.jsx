import React, {useState} from 'react'

const App = () => {
  
  // const [num, setNum] = useState({user:"Abhishek", age: 22});
  const [num, setNum] = useState(10);

  // const btnClicked = () => {
  //   const newNum = {...num};
  //   newNum.user = "Shubham";
  //   newNum.age = 54;
  //   setNum(newNum);
  // }

  //Batch-update
  const btnClicked = () => {
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
    setNum(prev => (prev + 1))
  }

  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
