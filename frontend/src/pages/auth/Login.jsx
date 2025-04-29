import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard')

  }
  return (
    <>
      <div className="signup-container">
        <div className="signup-box">
          <h2>Login</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="At least 6 characters" required />
            <small>Passwords must be at least 6 characters.</small>
            <button type="submit">Login</button>
          </form>
          <hr />
          <p>
           <Link to={'/register'}>Back</Link>
          </p>
        </div>
      </div>
    </>
  );
}
