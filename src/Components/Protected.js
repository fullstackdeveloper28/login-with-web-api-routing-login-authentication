import React from 'react'
import { Navigate } from 'react-router-dom';

function Protected(props) {
    const Cmd=props.cmd;
    console.warn(localStorage.getItem('auth'));
    var auth=JSON.parse(localStorage.getItem('auth'));

  return (
    <div>{(auth==="Success")?<Cmd/>:<Navigate to='/'></Navigate>}
      
    </div>
  )
}

export default Protected;
