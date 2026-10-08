import React from 'react'

const MyButton = () => {
    const handleClick = ()=>{
        alert('Button Clicked')
    }
  return <button 
  style={{ height: "40px",width: "100px"}}
  onClick={handleClick}>
    Click me
    </button>;
};

const Event = () => {
  return (
    <div>
      My  Button
    </div>
  );
};

export default Event
