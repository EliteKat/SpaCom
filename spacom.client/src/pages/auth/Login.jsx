import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    //const handleLogin = async (e) => {
    //    e.preventDefault();
    //    try {
    //        const response = await axios.post('/api/auth/login', { email, password });
    //        if (response.data.token) {
    //            localStorage.setItem('token', response.data.token);
    //            navigate('/dashboard');
    //        }
    //    } catch (err) {
    //        setError('Invalid credentials');
    //    }
    //};

    return (
        <div className="login-container">
            {/*<form onSubmit={handleLogin}>*/}
            <form>
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;