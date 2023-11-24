// Trong file Login.tsx

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../assets/css/login.css'; // Import file CSS

interface LoginProps {
  onLoginSuccess: (isLoggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Vui lòng nhập đầy đủ tên người dùng và mật khẩu');
      return;
    } else {
      localStorage.setItem('user', 'userShopee');
      onLoginSuccess(true); // Call the callback to update the state in App.tsx
    }
  };

  const handleRegister = () => {
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    } else if (password !== confirmPassword) {
      setError('Mật khẩu và mật khẩu nhập lại không khớp');
      return;
    } else {
      localStorage.setItem('user', 'userShopee');
      // Thực hiện đăng ký ở đây, ví dụ localStorage.setItem('user', 'userShopee');
      // Nếu thành công, có thể chuyển hướng trang hoặc thực hiện các thao tác cần thiết
    }
  };

  const handleSwitchForm = () => {
    setIsRegister((prevIsRegister) => !prevIsRegister);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isRegister ? 'Register' : 'Login'}</h2>
        <form>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          {isRegister && (
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input"
            />
          )}
          {error && <p className="error-message">{error}</p>}
          <Button
            variant="contained"
            color="primary"
            onClick={isRegister ? handleRegister : handleLogin}
            className="button"
          >
            {isRegister ? 'Register' : 'Login'}
          </Button>
          <p className="switch-form">
            {isRegister ? 'Already have an account? ' : "Don't have an account? "}
            <a href="#/" onClick={handleSwitchForm}>
              {isRegister ? 'Login here' : 'Register here'}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
