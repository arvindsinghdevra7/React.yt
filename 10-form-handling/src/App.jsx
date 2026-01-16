import React from 'react'

const App = () => {

  const a=(e)=>{
    e.preventDefault();
    console.log('hee');
  }
  return (
    <div>
      <form onClick={(e)=>{
        a(e);
      }} >
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App