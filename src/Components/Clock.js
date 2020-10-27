import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

 useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );

  return function cleanup() {
      clearInterval(timerID);
    };
 });
   function tick() {
    setDate(new Date());
   }
   
   return (
      <div>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    );
}

export default Clock