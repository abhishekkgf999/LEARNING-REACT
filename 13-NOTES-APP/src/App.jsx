import React, { useState } from 'react'

/*
========================================================
NOTES APP (React + useState)
========================================================

REVISION NOTES

1️⃣ useState
- useState is used to store and update data in React.
- When state changes → React re-renders the UI.

2️⃣ Controlled Inputs
- Input value is controlled by React state.
- value = state
- onChange updates the state.

3️⃣ Immutable Updates
- We NEVER modify state directly.
- Instead we create a copy and update it.

Example:
❌ task.push()
✔ copy = [...task]

4️⃣ Rendering Lists
- task.map() is used to display multiple notes.
- Each element must have a unique "key".
*/
const App = () => {

  /*
  ----------------------------------------------------
  STATE VARIABLES
  ----------------------------------------------------
  title   → stores heading of note
  details → stores note description
  task    → array storing all notes
  */
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  /*
  ----------------------------------------------------
  FORM SUBMIT HANDLER
  ----------------------------------------------------
  Steps:
  1. Prevent page reload
  2. Create copy of task array
  3. Add new note object
  4. Update state
  5. Clear inputs
  */
  const submitHandler = (e) => {

    // Prevents page refresh
    e.preventDefault();
    
    // Create copy of task array (important in React)
    const copyTask = [...task];

    // Push new note into array
    copyTask.push({title, details});

    // Update state → UI re-renders
    setTask(copyTask);
    
    // Clear input fields after adding note
    setTitle('');
    setDetails('');
  }

  /*
  ----------------------------------------------------
  ELETE NOTE FUNCTIOND
  ----------------------------------------------------
  Steps:
  1. Copy the task array
  2. Remove element using index
  3. Update state
  */
  const deleteNote = (idx) => {

    // Copy existing tasks
    const copyTask = [...task];

    // Remove note at given index
    copyTask.splice(idx, 1);

    // Update state
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      {/* ==============================
          LEFT SIDE : ADD NOTE FORM
         ============================== */}

      <form onSubmit={(e)=> submitHandler(e)} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        
        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        {/* 
        INPUT FIELD → NOTE TITLE
        Controlled Input Pattern
        value → comes from state
        onChange → updates state
        */}
        <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
        />

        {/* 
        TEXTAREA → NOTE DETAILS
        Same controlled input logic
        */}
        <textarea 
          type="text" 
          placeholder='Write Details here'
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
          value = {details}
          onChange={(e)=>{
            setDetails(e.target.value);
          }}
        />

        {/* Button automatically triggers form submit */}
        <button 
          className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

      </form>


      {/* ==============================
          RIGHT SIDE : DISPLAY NOTES
         ============================== */}

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>

          {/*
          task.map()
          - Used to loop through array
          - Each note becomes a card
          */}

          {task.map(function (elem, idx) {

            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >

                {/* NOTE CONTENT */}
                <div>
                  <h3 className='leading-tight text-lg font-bold'>
                    {elem.title}
                  </h3>

                  <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>
                    {elem.details}
                  </p>
                </div>

                {/* 
                DELETE BUTTON
                When clicked → calls deleteNote()
                */}
                <button
                  onClick={() => {
                    deleteNote(idx)
                  }}
                  className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'
                >
                  Delete
                </button>

              </div>
            )

          })}
        </div>
      </div>
    </div>
  )
}

export default App