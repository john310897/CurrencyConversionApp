import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
function SignUp(){
    let history=useHistory();

    const register1=(e)=>{
        var username=document.getElementById('username').value;
        var password=document.getElementById('pwd').value;
        var cp=document.getElementById('cpwd').value;

        if(username=="" || password=="" || cp==""){
            document.getElementById('error_msg').style.display='block';
            document.getElementById("error_msg").innerHTML="Fill in all the fields";
        }else{
        
            if(password!=cp){
                document.getElementById('error_msg').style.display='block';
                document.getElementById("error_msg").innerHTML="Password missmatch";
            }else{
                localStorage.setItem('username',username);
                localStorage.setItem('password',password);
                alert('account created');
                history.push('/');
            }
        }
        e.preventDefault();        
    }
    const responseGoogle=(response)=>{
        localStorage.setItem("email",response.profileObj.email);
        history.push('/home');
    }
    const responseGoogleError=()=>{
        document.getElementById('error_msg').style.display='block';
        document.getElementById("error_msg").innerHTML="Unable to access Google";    
    }
    
    return(
        <div className='container' id='auth_box'>
            <h3 align='center'>Sign Up</h3>
            <form>
            <div id='error_msg' className='alert alert-danger'>
                
                </div>
                <input type='text' placeholder='Enter username' id='username' className='form-control' required/><br/>
                <input type='password' placeholder='Enter password' id='pwd' className='form-control' required/><br/>
                <input type='password' placeholder='Confirm password' id='cpwd' className='form-control' required/><br/>
                <button className='btn btn-success form-control' onClick={register1}>Sign Up</button>
                <h6 align='center'>or</h6>
                <GoogleLogin 
                    clientId="188370296761-9qh8tdf1vnu8p7fi46ubt8p7ii24sdtm.apps.googleusercontent.com"
                    buttonText="Continue with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogleError}
                />
                <br/><br/>
                <h6 align='center'><Link to='/'>already have an account? click here</Link></h6>
            </form>            
        </div>
    );
}
export default SignUp;