import React, { Component } from 'react'

 class Login extends Component {
    Login()
    {
       /*  alert('Hi'); */
       console.warn(this.state);
       fetch('http://127.0.0.1:5555/Angular/api/Login',
       {
        method:"POST",
        headers:
        {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(this.state)
       }).then((result)=>{
        result.json().then((resp)=>{
            console.warn(resp);
            console.warn(JSON.stringify(resp[0].Status));
            localStorage.setItem('auth',JSON.stringify(resp[0].Status));
        })
       })
    }
  render() {
    return (
      <div>
        <div>LoginName: <input type="text"onChange={(e)=>{this.setState({LoginName:e.target.value})}} ></input></div><br/>
        <div>Password: <input type="password" onChange={(e)=>{this.setState({Password:e.target.value})}}></input></div><br/>
        <button onClick={(e)=>this.Login()}>Login</button>
      </div>
    )
  }
}
export default Login;
