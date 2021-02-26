import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
function Login(){
let history=useHistory();
    const loginauth=(e)=>{
        var user=document.getElementById('username').value;
        var pwd=document.getElementById('password').value;
        const getuser=localStorage.getItem('username');
        const getpwd=localStorage.getItem('password');

        if(user=="" || pwd==""){
            document.getElementById('error_msg').style.display='block';
            document.getElementById("error_msg").innerHTML="Fill in all the fields";
        }else{

            if(user==getuser && pwd==getpwd){
                history.push('/home');
            }else{
                document.getElementById('error_msg').style.display='block';
                document.getElementById("error_msg").innerHTML="Invalid username/password";
            }
        }
        e.preventDefault();
        
    }
    const responseGoogle=(response)=>{
        console.log(response.profileObj.email);

        if(localStorage.getItem("email")==response.profileObj.email){
            history.push('/home');
        }else{
            document.getElementById('error_msg').style.display='block';
            document.getElementById("error_msg").innerHTML="Account doesn't exist";
        }
    }
    const responseGoogleError=()=>{
        document.getElementById('error_msg').style.display='block';
        document.getElementById("error_msg").innerHTML="Unable to access Google";    
    }
    return(
        <div className='container' id='auth_box'>
            
            <h3 align='center'>Sign in</h3>
            <div id='error_msg' className='alert alert-danger'>
                
            </div>
            <form >
                    <input type='text' id='username' className='form-control' placeholder='Username' required/><br/><br/>
                    <input type='password' id='password' className='form-control' placeholder='Password' required/><br/>
                    <button className='btn btn-success form-control' onClick={loginauth}>Sign in</button><br/>
                    <div className='row'>
                        <div className='col' align='left'>
                            <Link to='/forgotpwd'>
                            forgot password?
                            </Link>
                        </div>
                        <div className='col' align='right'>
                            <Link to='/signup'>
                            New user,sign up
                            </Link>
                        </div>

                    </div>
                    <h6 align='center'>Or</h6>
                    <GoogleLogin
                        clientId="188370296761-9qh8tdf1vnu8p7fi46ubt8p7ii24sdtm.apps.googleusercontent.com"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogleError}

                    />
                    
        
        </form>    
        </div>
        
    );
}

export default Login;