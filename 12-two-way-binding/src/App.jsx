import React, { useState } from 'react'

const App = () => {

  const [text, setText] = useState('')
  const a=(e)=>{
    e.preventDefault();
    console.log('hello',text);
    
    setText('');
  
  }
  return (
    <div>
      <form onClick={(e)=>{
        a(e);
      }} >
        <input type="text" placeholder='Enter Your Name' value={text} onChange={(e)=>{
          setText(e.target.value);
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App