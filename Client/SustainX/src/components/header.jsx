import { LogIn } from 'lucide-react';
import logo from '../assets/sustainx-logo.png'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Header = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchUser = async () => {
            try {
                const response = await fetch('/api/users', {
                    method: "GET",
                    credentials: "include"
                });

                if (!response.ok) {
                    if (response.status !== 401) {
                        throw new Error(`Failed to load user (${response.status}).`);
                    }
                    if (isMounted) setUser(null);
                    return;
                }

                const data = await response.json();
                if (isMounted) setUser(data.user);
            } catch (err) {
                console.error("Unable to load the logged-in user:", err);
                if (isMounted) setUser(null);
            }
        };

        fetchUser();
        window.addEventListener('auth-change', fetchUser);
        return () => {
            isMounted = false;
            window.removeEventListener('auth-change', fetchUser);
        };
    }, []);

    const handleLogOut = async () => {
        try {
            const response = await fetch('/api/logout', {
                method: "GET",
                credentials: "include"
            });
            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || `Logout failed (${response.status}).`);
            }

            setUser(null);
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

                    {

                        user ? <button
                            className="group flex items-center gap-2 rounded-xl border border-purple-400/40 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-200 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] cursor-pointer"
                            onClick={handleLogOut}
                        >
                            <LogIn
                                size={18}
                                strokeWidth={2}
                                className="transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                            <span> Welcome {user.firstName} </span>
                        </button> :

                            <NavLink to="/login">
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




                </div>
            </header>
        </>

    );
}

export default Header;