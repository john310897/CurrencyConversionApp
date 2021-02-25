import React from 'react';
import { Link } from 'react-router-dom';
function SignUp(){
    return(
        <div className='container' id='auth_box'>
            <h3 align='center'>Sign Up</h3>
            <form>
                <input type='text' placeholder='Enter username' id='username' className='form-control' required/><br/>
                <input type='password' placeholder='Enter password' id='pwd' className='form-control' required/><br/>
                <input type='password' placeholder='Confirm password' id='cpwd' className='form-control' required/><br/>
                <button className='btn btn-success form-control'>Sign Up</button>
                <h6 align='center'>or</h6>
                <button className='form-control'>SignUp with Google</button>
                <h6 align='center'><Link to='/'>already have an account? click here</Link></h6>
            </form>            
        </div>
    );
}
export default SignUp;