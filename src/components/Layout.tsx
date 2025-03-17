import { ReactNode, useMemo } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { SidebarItem, FooterLink } from '../types';
import icon_dashboard from '../assets/icon_dashboard.svg';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    const sidebarItems: SidebarItem[] = useMemo(
        () => [
            { label: 'Dashboard', path: '/dashboard', icon:  icon_dashboard},
        ],
        []
    );

    const footerLinks: FooterLink[] = useMemo(
        () => [
            { label: 'Termos de Uso', href: '#' },
            { label: 'Política de Privacidade', href: '#' },
        ],
        []
    );

    return (
        <div className="d-flex">
            <Sidebar items={sidebarItems} />
            <div className="d-flex flex-column w-100">
                <Header />
                <main className="flex-grow-1 px-5">
                    {children}
                </main>
                <Footer links={footerLinks} />
            </div>
        </div>
    );
};

export default Layout;