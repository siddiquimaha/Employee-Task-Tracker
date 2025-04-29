import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    designation: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); // prevent page reload
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:5000/register', formData);
      if (response.status === 200 || response.status === 201) {
        alert('Signup successfully registered in db!');
        setFormData ({name: '', email: '',password: '', designation: ''}) // all input/form values cleared
        navigate('/login')  // Redirect to the login page
      }

      // console.log(response.data);
    } catch (error) {
      // console.error('Signup failed:', error.response?.data || error.message);
      if (error.response?.status === 400) {
        alert(error.response.data.message || 'User already exists. Please login.');
          navigate('/login')  // Redirect to the login page
      } else {
        console.error('Signup failed:', error.response?.data || error.message);
        alert('An error occurred during signup. Please try again.');
      }
    }
    setFormData ({name: '', email: '',password: '', designation: ''}) // all input/form values cleared
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Register</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} value={formData.name} required />

          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} value={formData.email} required />

          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} value={formData.password} required />

          <label>Designation</label>
          <input type="text" name="designation" onChange={handleChange} value={formData.designation} required />

          <button type="submit">Sign Up</button>
        </form>
        <hr />
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
