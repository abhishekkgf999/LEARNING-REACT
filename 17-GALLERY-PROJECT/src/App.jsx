import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

/*
1️⃣ useEffect
- Runs side effects (like API call)
- Runs when dependency changes

2️⃣ Dependency Array
- [index] → means run useEffect when index changes
- Used here for pagination

3️⃣ API Calling
- axios.get() returns data from server
- response.data → actual data

4️⃣ Loading Handling
- Initially userData = []
- If empty → show "Loading..."
- If data comes → render UI

5️⃣ Pagination Logic
- index = page number
- Changing index → triggers API call
*/

const App = () => {

  /*
  ----------------------------------------------------
  STATE VARIABLES
  ----------------------------------------------------
  userData → stores API data (images list)
  index    → current page number
  */
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  /*
  ----------------------------------------------------
  API CALL FUNCTION
  ----------------------------------------------------
  Steps:
  1. Call API with page number
  2. Store response in state
  */
  const getData = async () => {

    // Fetch data from API
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    )

    // Store data → triggers re-render
    setUserData(response.data)
  }

  /*
  ----------------------------------------------------
  useEffect
  ----------------------------------------------------
  - Runs when component loads
  - Also runs when index changes
  - Used for API call
  */
  useEffect(function () {
    getData()
  }, [index])


  /*
  ----------------------------------------------------
  CONDITIONAL RENDERING
  ----------------------------------------------------
  - If no data → show Loading
  - If data exists → map and show cards
  */
  let printUserData = (
    <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
      Loading...
    </h3>
  )

  if (userData.length > 0) {

    // Loop through data and render Card
    printUserData = userData.map(function (elem, idx) {

      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      )
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>

      {/* ==============================
          IMAGE CARDS SECTION
         ============================== */}

      <div className='flex h-[82%] flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      {/* ==============================
          PAGINATION CONTROLS
         ============================== */}

      <div className='flex justify-center gap-6 items-center p-4'>

        {/* 
        PREV BUTTON
        - Decrease page number
        - Disabled effect when index = 1
        */}
        <button
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {

            // Prevent going below page 1
            if (index > 1) {

              // Decrease page number
              setIndex(index - 1)

              // Clear old data → shows loading
              setUserData([])
            }
          }}
        >
          Prev
        </button>

        {/* CURRENT PAGE */}
        <h4>Page {index}</h4>

        {/* 
        NEXT BUTTON
        - Increase page number
        */}
        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {

            // Clear old data → shows loading
            setUserData([])

            // Increase page number
            setIndex(index + 1)

          }}
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default App