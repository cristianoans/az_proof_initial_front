import { Link } from 'react-router-dom';
import { SidebarProps } from '../types';
import logo from '../assets/logo.svg';

const Sidebar = ({ items }: SidebarProps) => {

    return (
        <div className="sidebar d-flex flex-column p-3">
            <a className="d-flex justify-content-center mb-4" href='#'>
                <img src={logo} alt="logo AZ Suite" />
            </a>
            <ul className="nav flex-column mb-auto">
                {items.map((item) => (
                    <li className="nav-item" key={item.path}>
                        <Link to={item.path} className="nav-link">
                            <div className='d-flex gap-3'>
                                <img src={item.icon} alt="ícone dashboard" />
                                <div>{item.label}</div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;