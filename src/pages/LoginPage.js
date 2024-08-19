// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

import logo from '../images/logo.png';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  

  const navigate=useNavigate();

//to handle login page submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('userEmail', email);
      onLogin(email);
      navigate('/home');
    }
  };
//

  return (
    <div className='container'>
      <div class='log-box'>
      <div class='row'  >
        <div class='col-md-6'>
                <div class='loginpage' >
                  
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class='login-input'
                      />
                      <button onClick={handleSubmit}>Login</button>
                    </form>
                  <div class="terms-and-services">
                    <h4>
                    <p>
                      <a href='/login'>Terms of Service | Privacy Policy</a>
                    </p>
                    </h4>
                  </div>
                </div>    
        </div>
        <div class='col-md-6'>
              <img src={logo} alt="Logo" class="login-logo" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
