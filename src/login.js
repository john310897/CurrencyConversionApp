import React from 'react';
import {Link} from 'react-router-dom';
function Login(){

    const login=()=>{
        alert('he');
    }
    return(
        <div className='container' id='auth_box'>
            <h3 align='center'>Sign in</h3>
            <form>
                    <input type='text' id='username' className='form-control' placeholder='Username' required/><br/><br/>
                    <input type='password' id='username' className='form-control' placeholder='Password' required/><br/>
                    <button className='btn btn-success form-control' onClick={login}>Signin</button><br/>
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
                    <button className='form-control' onClick={login}>Signin with google</button>
            </form>
        </div>
    );
}
export default Login;