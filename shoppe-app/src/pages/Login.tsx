import { Button, TextField, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import '../assets/css/Login.css'
import GoogleLogin from 'react-google-login';

const useStyles = makeStyles((theme) => ({
  loginForm: {
    backgroundColor: '#ffffff',
    padding: 40,
    borderRadius: 8,
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  h2: {
    marginBottom: 30,
    color: '#4a90e2',
  },
  button: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#ff6347',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#d63431',
    },
  },
}));
  
interface LoginProps {
    onLoginSucces: (isLoggedIn: boolean) => void;
  }


const Login: React.FC <LoginProps> = ({onLoginSucces}) => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    const classes = useStyles()
    const cliendId = '937200536043-m06el2tvb83heea39ooafgpri76t0kjb.apps.googleusercontent.com'

    const resGoogle = (response: any) =>  {
      if (response.profileObj) {
        localStorage.setItem('user', JSON.stringify(response.profileObj))
        onLoginSucces(true)
      }
    };


    const handleLogin = () => {
        if(username.trim() === '' || password.trim() === '') {
            setError('Vui lòng không bỏ trống các ô !');
            return;
        } else {
            localStorage.setItem('user', 'Minh Triết')
            onLoginSucces(true);
        }
    }

    const handleResister = () => {
        if(username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            setError('Vui Lòng không bỏ trống !')
            return;
        } else {
            localStorage.setItem('user', 'Minh Triết')
        }
    };

    const handleSwitchForm = () => {
        setIsRegister((prevIsResister) => !prevIsResister);
    }

  return (
    <div className={classes.loginForm}>
      <div className={classes.loginForm}>
        <h2 className={classes.h2}>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</h2>
            <form>
                <TextField
                label = 'Tên người dùng'
                variant='outlined'
                margin='normal'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className='input'
                />
                <TextField
                label = 'Mật khẩu'
                variant='outlined'
                margin='normal'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='input'
                />
                {isRegister && (
                    <TextField
                    label = 'Xác nhận mật khẩu'
                    variant='outlined'
                    margin='normal'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='input'
                    />
                )}
                {error && <p className='error-message'>{error}</p>}
                <Button
                variant='contained'
                color='primary'
                onClick={isRegister ? handleResister : handleLogin}
                className={classes.button}
                >
                    {isRegister ? 'Đăng ký' : 'Đăng nhập' }
                </Button>
                <p className='switch-form'>
                    {isRegister ? 'Bạn đả có tài khoản ?' : "Bạn chưa có tài khoản ?"}
                    <a href='#/' onClick={handleSwitchForm}>
                    {isRegister ? 'Đăng nhập tại đây' : ' Đăng ký tại đây '}
                    </a>
                </p>
                <GoogleLogin
                  clientId={cliendId}
                  buttonText='Đăng nhập với Google'
                  onSuccess={resGoogle}
                  onFailure={resGoogle}
                  cookiePolicy={'single_host_origin'}
                />

                
            </form>
        </div>
    </div>
  );
}

export default Login;