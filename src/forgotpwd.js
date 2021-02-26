import React from 'react';
import {Link} from 'react-router-dom';
function Forgotpwd(){
    const retrive=(e)=>{
        var user=document.getElementById('username').value;
        if(user==""){
            document.getElementById('error_msg').style.display='block';
            document.getElementById("error_msg").innerHTML="Enter username";
        }else{
            const getuser=localStorage.getItem('username');
            if(user==getuser){
                alert("your password is: "+localStorage.getItem('password'));
            }
            else{
                document.getElementById('error_msg').style.display='block';
                document.getElementById("error_msg").innerHTML="Username doesn't exist";
            }
        }
        e.preventDefault();
    }
    return(
        <div className='container' id='auth_box'>
            <h4 align='center'>Enter your username to retrive password</h4><br/>
            <form>
            <div id='error_msg' className='alert alert-danger'>
                
                </div>
                
                    <input type='text' id='username' className='form-control' placeholder='Username' required/><br/><br/>
    
                    <button className='btn btn-success form-control' onClick={retrive}>Retrive password</button><br/>
                    <div className='row'>
                        <div className='col' align='left'>
                            <Link to='/'>
                            Login
                            </Link>
                        </div>
                        <div className='col' align='right'>
                            <Link to='/signup'>
                            New user,sign up
                            </Link>
                        </div>
                    </div>
                    
        </form>
        </div>
    );
}
export default Forgotpwd;
