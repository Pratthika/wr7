import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login with', email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <a href="#">Forgot Password?</a>
    </div>
  );
}

export default Login;
