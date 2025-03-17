import { createContext, useState, useContext, ReactNode } from 'react';
import { UserProfile, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    const login = (newProfile: UserProfile, newToken: string) => {
        localStorage.setItem('token', newToken);
        setProfile(newProfile);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setProfile(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ profile, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};