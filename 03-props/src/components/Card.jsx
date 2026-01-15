import React from 'react'

const card = (props) => {
    console.log(props);
  return (
           <div className='card'>
         <img src='https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=1024x1024&w=is&k=20&c=NQtm4v1Uzp2luv-6f3qORcq9pDtz2H56p8g9Xix8cY0='></img>
     <h1>{props.user}</h1>
     <p>lorem asca scj</p>
     <button>View Profile</button>
    </div>
  )
}

export default card