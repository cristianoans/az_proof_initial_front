import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import notification from '../assets/notification.svg';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { logout, profile } = useAuth();
    const navigate = useNavigate();
    const userName = profile?.name || 'Usuário';

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase();
    };

    return (
        <header className="d-flex justify-content-end align-items-center p-3">
            <div className="d-flex align-items-center gap-4 me-4">
                <div className='d-flex gap-2'>
                    <div><img src={notification} alt="ícone notificação" /></div>
                    <span>Avisos</span>
                </div>

                <div className="dropdown">
                    <button
                        className="btn d-flex align-items-center"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <div className='d-flex flex-column me-3 text-end'>
                            <span className='saudacao'>Olá,</span>
                            <span className='username'>{userName}</span>
                        </div>
                        <span className="d-flex align-items-center justify-content-center rounded-circle p-4" >
                            {getInitials(userName)}
                        </span>
                    </button>
                    {showDropdown && (
                        <ul className="dropdown-menu show">
                            <li>
                                <button className="dropdown-item" onClick={handleLogout}>
                                    Logoff
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;