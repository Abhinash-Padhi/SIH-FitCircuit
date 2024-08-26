import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Auth.css';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  // Watch the fields for changes
  const username = watch("username");
  const email = watch("email");
  const password = watch("password");
  const confirmPassword = watch("confirmpassword");

  const onSubmit = async (data) => {

    let res;
    if (data.password !== data.confirmpassword) {
      setError("confirmpassword", {
        type: "manual",
        message: "The two password fields must be identical",
      });
      return; 
    }

    clearErrors("confirmpassword");

    let r = await fetch("http://localhost:3000/userSignup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if(r.ok){
      res=await r.json()
      console.log(res)
      navigate('/createprofile',{state:{userData:res}});
      return;
    }
    else{
      res=await r.text()
    }
    
    if (res === "Username already exists") {
      setError("usernameMatch", {
        type: "manual",
        message: res,
      });
      return; 
    }
    
    if (res === "Email has already been registered.Sign in.") {
      setError("emailMatch", {
        type: "manual",
        message: res,
      });
      return; 
    }

    clearErrors("usernameMatch");
    clearErrors("emailMatch");
  };

  // Automatically clear errors when fields change
  React.useEffect(() => {
    if (username) {
      clearErrors("usernameMatch");
    }
    if (email) {
      clearErrors("emailMatch");
    }
    if (password && confirmPassword && password === confirmPassword) {
      clearErrors("confirmpassword");
    }
  }, [username, email, password, confirmPassword, clearErrors]);

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="User Name"
            required
            {...register("username")}
          />
          {errors.usernameMatch && (
            <div className='error'>{errors.usernameMatch.message}</div>
          )}
          
          <input
            type="email"
            placeholder="Email"
            required
            {...register("email")}
          />
          {errors.emailMatch && (
            <div className='error'>{errors.emailMatch.message}</div>
          )}
          
          <input
            type="password"
            placeholder="Password"
            required
            {...register("password", {
              minLength: {
                value: 8,
                message: "Minimum 8 characters are required",
              },
            })}
          />
          {errors.password && (
            <div className='error'>{errors.password.message}</div>
          )}
          
          <input
            type="password"
            placeholder="Confirm Password"
            required
            {...register("confirmpassword")}
          />
          {errors.confirmpassword && (
            <div className='error'>{errors.confirmpassword.message}</div>
          )}
          
          <button type="submit" disabled={isSubmitting}>Create Account</button>
        </form>
        
        <div className="social-login">
          <p>Or sign up with:</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <FontAwesomeIcon icon={faGoogle} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </div>
        </div>
        
        <p>
          Already have an account? <Link to="/signin" className='b1'>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
