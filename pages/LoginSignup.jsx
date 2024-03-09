import React from 'react'
import './css/login.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignupcontainer">
        <h1 className='signup'>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter your name' />
          <input type="email" name="" id="" placeholder='Enter your mail id' />
          <input type="password" placeholder='Enter your password' />

        </div>
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button>Continue</button>
        <p className='login'>Already have an account <span>Login</span></p>

      </div>

    </div>
  )
}

export default LoginSignup
