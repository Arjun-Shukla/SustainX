import { LogIn, Menu, X } from 'lucide-react';
import { apiUrl } from '../api';
import logo from '../assets/sustainx-logo.png'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Header = ({ isMobileMenuOpen, onMobileMenuToggle, onUserChange }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchUser = async () => {
            try {
                const response = await fetch(apiUrl('/api/users'), {
                    method: "GET",
                    credentials: "include"
                });

                if (!response.ok) {
                    if (response.status !== 401) {
                        throw new Error(`Failed to load user (${response.status}).`);
                    }
                    if (isMounted) {
                        setUser(null);
                        onUserChange(null);
                    }
                    return;
                }

                const data = await response.json();
                if (isMounted) {
                    setUser(data.user);
                    onUserChange(data.user);
                }
            } catch (err) {
                console.error("Unable to load the logged-in user:", err);
                if (isMounted) {
                    setUser(null);
                    onUserChange(null);
                }
            }
        };

        fetchUser();
        window.addEventListener('auth-change', fetchUser);
        return () => {
            isMounted = false;
            window.removeEventListener('auth-change', fetchUser);
        };
    }, [onUserChange]);

    const handleLogOut = async () => {
        try {
            const response = await fetch(apiUrl('/api/logout'), {
                method: "GET",
                credentials: "include"
            });
            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || `Logout failed (${response.status}).`);
            }

            setUser(null);
            onUserChange(null);
            window.dispatchEvent(new Event('auth-change'));
            alert(data.message);
        } catch (err) {
            console.error("Unable to log out:", err);
            alert(err.message || "Error logging out");
        }
    }


    return (
        <>

            <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-[#080B0B]/95 backdrop-blur-xl">
                <div className="relative mx-auto flex h-20 w-full items-center justify-between px-5 sm:px-8">

                    {/* {left} */}

                    <NavLink
                        to="/"
                        className="flex h-18 w-18 shrink-0 items-center overflow-hidden rounded-2xl border border-purple-500/30"
                    >
                        <img
                            src={logo}
                            alt="SustainX"
                            className="h-full w-full rounded-2xl object-contain"
                        />
                    </NavLink>

                    {/* {center} */}

                    <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-2xl font-extrabold tracking-tight sm:text-3xl">

                        <span className="text-white">Sustain</span>
                        <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                            X
                        </span>

                    </div>

                    {/* {right} */}

                    <div className="flex items-center gap-2">
                        {
                            user ? <button
                                className="group flex max-w-24 items-center gap-2 truncate rounded-xl border border-purple-400/40 bg-purple-500/10 px-2 py-2.5 text-xs font-semibold text-purple-200 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] cursor-pointer sm:max-w-none sm:px-5 sm:text-sm"
                                onClick={handleLogOut}
                            >
                                <LogIn
                                    size={18}
                                    strokeWidth={2}
                                    className="hidden shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 sm:block"
                                />
                                <span className="truncate">{user.firstName || user.name || 'Account'}</span>
                            </button> :

                                <NavLink to="/login" className="hidden sm:block">
                                    <button
                                        className="group flex items-center gap-2 rounded-xl border border-purple-400/40 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-200 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] cursor-pointer"
                                    >
                                        <LogIn
                                            size={18}
                                            strokeWidth={2}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                                        />
                                        <span>Login</span>
                                    </button>
                                </NavLink>
                        }

                        <button
                            type="button"
                            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-navigation"
                            onClick={onMobileMenuToggle}
                            className="rounded-lg border border-purple-500/30 p-2 text-purple-200 transition hover:bg-purple-500/10 sm:hidden"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                </div>
            </header>
        </>

    );
}

export default Header;