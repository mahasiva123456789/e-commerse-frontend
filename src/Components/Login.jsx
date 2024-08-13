import { React } from 'react';
import './LoginSignUp.css';
import { Link } from 'react-router-dom';
const Login = () => {

  return (
    <div className="login-signup-container">
      <div className="login-signup-box login-signup-left">
        <h2 className="login-signup-h2">Sign In</h2>
        <form>
          <div className="login-signup-input-container">
            <label htmlFor="email" className="login-signup-label">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="username"
              className="login-signup-input"
            />
          </div>
          <div className="login-signup-input-container">
            <label htmlFor="password" className="login-signup-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="current-password"
              className="login-signup-input"
            />
          </div>
          <button type="submit" className="login-signup-button">Sign In</button>
          <div className="login-signup-auth-options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <Link to="#">Forgot Password?</Link>
          </div>
        </form>
      </div>
      <div className="login-signup-box login-signup-right">
        <h2 className="login-signup-h2">Welcome Back</h2>
        <p className="login-signup-p">Don't have an account?</p>
        <Link to="/signup">
          <button className="login-signup-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
