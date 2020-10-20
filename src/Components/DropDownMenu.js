import React, { useState } from 'react';



const DropDownMenu = () => {
  const [plugs] = useState([
    { label: "plug1", value: "plug1"},
    { label: "plug2", value: "plug2" },
    { label: "plug3", value: "plug3" }
  ]);
  return (
    <div>
      <p style={{fontSize:'28px'}}>The Device:</p>
      <select style={{width:'500px', height:'50px', fontSize:'28px'}}>
        {plugs.map(plug => (
          <option
            key={plug.value}
            value={plug.value}
          >
            {plug.label}
          </option>
        ))}
      </select>
    </div>
    
  );
}

export default DropDownMenu