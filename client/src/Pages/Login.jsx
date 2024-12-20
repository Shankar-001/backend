import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // axios.defaults.withCredentials = true; // this is very important in front end
      const response = await axios.post('/api/v1/users/login', {
        email,
        password,
      });
      console.log('Login successful!', response.data);
      setIsLoggedIn(true);
      // Handle successful login, e.g., redirect user to dashboard
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const handleLogout = async () => {
    try {
      // axios.defaults.withCredentials = true;
      const response = await axios.post('/api/v1/users/logout');
      console.log('Logout successful!', response.data);
      setIsLoggedIn(false);
      // Handle successful logout, e.g., redirect user to login page
    } catch (error) {
      console.error('Logout failed:', error.response.data.message);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
