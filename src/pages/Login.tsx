import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import { LoginCredentials, UserProfile } from '../types';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../assets/logo.svg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const credentials: LoginCredentials = { email, password };
            const response = await loginUser(credentials);
            const { profile, email: userEmail, token, id } = response.data;

            const userProfile: UserProfile = {
                name: profile.name,
                email: userEmail,
                id,
            };

            login(userProfile, token);
            toast.success('Login realizado com sucesso!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error);
            toast.error('Erro no login. Verifique suas credenciais.');
        }
    };

    return (
        <div className="login-container">
            <Toaster position="top-center" />
            <div className='col'>
                <div className="card">
                    <div className="text-center mb-4">
                        <img src={logo} alt="Logomarca" width={160}/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">E-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="seuemail@exemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <a className='text-decoration-none' href="#">Esqueci a senha</a>
                        </div>


                        <button type="submit" className="btn w-100" style={{ backgroundColor: '#FF6B6B', color: 'white' }}>
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
            <div className='col banner vh-100'></div>
        </div>
    );
};

export default Login;