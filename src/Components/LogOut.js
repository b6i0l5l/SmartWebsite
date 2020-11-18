import React from 'react';
import { useHistory } from "react-router-dom";

const LogOut = () => {
  const history = useHistory();
  const logOutClick = () => {
    history.push(("/"));
  }

    return (
      <div>
        <button style={{position: "absolute", top: 10, left: 10, width: 150, height: 20}} onClick={logOutClick}>Log Out</button>
      </div>
    );
}

export default LogOut