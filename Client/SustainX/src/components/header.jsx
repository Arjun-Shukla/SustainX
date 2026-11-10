import { LogIn, Menu, X } from 'lucide-react';
import { apiUrl } from '../api';
import logo from '../assets/sustainx-logo.png'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import SustainXLoader from './SustainXLoader';

const Header = ({ user, isMobileMenuOpen, onMobileMenuToggle, onUserChange }) => {

    const [logoutSubmitting, setLogoutSubmitting] = useState(false);
    const [logoutMessage, setLogoutMessage] = useState("");

    useEffect(() => {
        let isMounted = true;

        const fetchUser = async () => {
            try {
                const response = await fetch(apiUrl('/api/users'), {
                    method: "GET",
                    credentials: "include",
                    cache: "no-store",
                });

                if (!response.ok) {
                    if (response.status !== 401) {
                        throw new Error(`Failed to load user (${response.status}).`);
                    }
                    if (isMounted) {
                        onUserChange(null);
                    }
                    return;
                }

                const data = await response.json();
                if (isMounted) {
                    onUserChange((currentUser) => ({
                        ...data.user,
                        plan: data.user.plan || currentUser?.plan || null,
                        teamsSelected: data.user.teamsSelected || currentUser?.teamsSelected || false,
                    }));
                }
            } catch (err) {
                console.error("Unable to load the logged-in user:", err);
                if (isMounted) {
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
        setLogoutSubmitting(true);
        try {
            const response = await fetch(apiUrl('/api/logout'), {
                method: "GET",
                credentials: "include"
            });
            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || `Logout failed (${response.status}).`);
            }

            onUserChange(null);
            window.dispatchEvent(new Event('auth-change'));
            setLogoutMessage("Logout successful.");
        } catch (err) {
            console.error("Unable to log out:", err);
            setLogoutMessage(err.message || "Error logging out");
        } finally {
            setLogoutSubmitting(false);
        }
    }

    const planTier = user?.plan?.toLowerCase().includes('free')
        ? 'FREE'
        : user?.plan?.toLowerCase().includes('plus')
            ? 'PLUS'
            : user?.plan?.toLowerCase().includes('pro')
                ? 'PRO'
                : null;
    const planLabel = planTier;
    const planColors = {
        FREE: 'border-emerald-400/40 bg-emerald-500/15 text-emerald-300',
        PLUS: 'border-orange-400/40 bg-orange-500/15 text-orange-300',
        PRO: 'border-purple-400/40 bg-purple-500/15 text-purple-300',
    };


    return (
        <>

            <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-[#080B0B]/95 backdrop-blur-xl">
                <div className="relative mx-auto flex h-20 w-full items-center justify-between gap-2 px-3 sm:px-8">

                    {/* {left} */}

                    <NavLink
                        to="/"
                        className="flex h-12 w-12 shrink-0 items-center overflow-hidden rounded-2xl border border-purple-500/30 sm:h-18 sm:w-18"
                    >
                        <img
                            src={logo}
                            alt="SustainX"
                            className="h-full w-full rounded-2xl object-contain"
                        />
                    </NavLink>

                    {/* {center} */}

                    <div className="min-w-0 flex-1 whitespace-nowrap text-center text-lg font-extrabold tracking-tight sm:text-3xl">

                        <span className="text-white">Sustain</span>
                        <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                            X
                        </span>

                    </div>

                    {/* {right} */}

                    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                        {
                            user ? <>
                                {planTier && (
                                    <span
                                        title={planLabel}
                                        className={`max-w-[3.5rem] truncate rounded-lg border px-1.5 py-2 text-[8px] font-bold tracking-wide sm:max-w-none sm:px-3 sm:text-xs sm:tracking-wider ${planColors[planTier]}`}
                                    >
                                        {planLabel}
                                    </span>
                                )}
                                <button
                                type="button"
                                disabled={logoutSubmitting}
                                aria-busy={logoutSubmitting}
                                className="group flex max-w-14 items-center gap-2 truncate rounded-xl border border-purple-400/40 bg-purple-500/10 px-1.5 py-2.5 text-[10px] font-semibold text-purple-200 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] cursor-pointer sm:max-w-none sm:px-5 sm:text-sm"
                                onClick={handleLogOut}
                            >
                                <LogIn
                                    size={18}
                                    strokeWidth={2}
                                    className="hidden shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 sm:block"
                                />
                                <span className="relative truncate">
                                    {logoutSubmitting ? "Logging out..." : user.firstName || user.name || 'Account'}
                                </span>
                                </button>
                            </> :

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
            <SustainXLoader isLoading={logoutSubmitting} />
            {logoutMessage && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
                    role="presentation"
                >
                    <div
                        role="alertdialog"
                        aria-modal="true"
                        aria-labelledby="logout-message"
                        className="w-full max-w-md rounded-2xl border border-purple-400/30 bg-[#12101f] p-6 text-center shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                    >
                        <p id="logout-message" className="text-base leading-relaxed text-purple-100">
                            {logoutMessage}
                        </p>
                        <button
                            type="button"
                            onClick={() => setLogoutMessage("")}
                            className="mt-6 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-2.5 font-semibold text-white transition hover:from-purple-500 hover:to-fuchsia-500 cursor-pointer"
                        >
                            Go
                        </button>
                    </div>
                </div>
            )}
        </>

    );
}

export default Header;