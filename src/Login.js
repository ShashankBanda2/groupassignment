import React,{Component} from 'react'
import Signup from './Signup';
import ReactRoundedImage from 'react-rounded-image';
import './Login.css'



class Login extends React.Component
{
    render(){

        return(
        <div id="Login-Component" >
        <br/><br/>
        <center>
        <ReactRoundedImage image={"picc.jpg"} roundedSize="0" imageWidth="75" imageHeight="75" />
        </center>
            <h2 style={{margin:0, padding:0}}>Welcome Back !</h2>
            <p style={{margin:0, padding:0,marginBottom:"30px"}}>sign in to your account</p>

         
       
        <input type="text" placeholder="  Enter Email Here !" style={{height:35,width:250,margin:3, padding:0,border: "1px solid #D3D3D3",
  borderRadius: "3px"}} />
        <br/>

       

        <input type="text" placeholder="  Enter Password here!"  style={{height:35,width:250,border: "1px solid #D3D3D3",borderRadius: "3px"}}/>
        <br/>
         <input type="checkbox" />Remember me

        
        <button style={{backgroundColor:"#FA8072", height:"40px",width:"80px",marginLeft:"40px",marginTop:"10px",fontSize:"12px",color:"white",borderRadius:"4px",border:"none"}}>SIGN IN</button> 
        <Signup/>
        </div>
        )


    }
}

export default Login;