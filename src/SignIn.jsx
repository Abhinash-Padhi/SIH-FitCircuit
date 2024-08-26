import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Auth.css';
import { useForm } from 'react-hook-form';


const Signin = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    register,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSignin = async(e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data={
      email:email,
      password:password
    }
    console.log(data)

    let r=await fetch("http://localhost:3000/userSignin",
      { method:"POST", 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)}
    )
    let res

    if(r.ok){
      res=await r.json()
      console.log(res)
      navigate('/profile',{state:{userData:res}});
      return;
    }
    else{
      res=await r.text()
    }
    
    if(res==="Email has not been registered yet.Sign up first."){
      setError("emailNotFound", {
        type: "manual",
        message: res,
      });
      return; 
    }

    clearErrors("emailNotFound")
    
    if(res==="Incorrect Password.Try again."){
      setError("incorrectPassword", {
        type: "manual",
        message: res,
      });
      return; 
    }

    clearErrors("incorrectPassword")
 
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSignin}>
          <input 
            type="email" 
            placeholder="Email" 
            required 
            ref={emailRef}
          />
          {errors.emailNotFound && <div className='error'>{errors.emailNotFound.message}</div>}
          <input 
            type="password" 
            placeholder="Password" 
            required 
            ref={passwordRef}
          />
          {errors.incorrectPassword && <div className='error'>{errors.incorrectPassword.message}</div>}
          <button type="submit">Sign In</button>
        </form>
        <div className="social-login">
          <p>Or sign in with:</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faGoogle} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </div>
        </div>
        <p>
          Don't have an account? <Link to="/signup" className='b1'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
