import { House, LogIn, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom'


const Sidebar = ({ isMobileMenuOpen, onMobileMenuClose, user }) => {
    const links = [
        { name: 'Home', href: "/", Icon: House },
        { name: 'Our Teams', href: "/teams", Icon: Users },
    ];

    return (
        <aside className="fixed left-0 right-0 top-20 z-40 w-full border-b border-purple-500/20 bg-[#0B0B0F]/95 px-4 py-3 backdrop-blur-xl lg:right-auto lg:h-[calc(100vh-5rem)] lg:w-64 lg:border-b-0 lg:border-r lg:px-4 lg:py-8">

            {/* Sidebar heading */}
            <div className="mb-8 hidden px-3 lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                    Workspace
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    Explore SustainX
                </p>
            </div>

            {/* Navigation links */}
            <nav aria-label="Main navigation" className="hidden lg:block">
                <ul className="space-y-3">
                    {links.map(({ name, href, Icon }) => (
                        <li key={name}>
                            <NavLink
                                to={href}
                                end={href === "/"}
                                className={({ isActive }) =>
                                    `group relative flex items-center gap-4 overflow-hidden rounded-xl border px-4 py-3.5 transition-all duration-300 ease-out
        ${isActive
                                        ? 'border-purple-500/30 bg-purple-500/10 text-purple-200 shadow-[inset_0_0_20px_rgba(168,85,247,0.04)]'
                                        : 'border-transparent text-gray-400 hover:translate-x-1 hover:border-purple-500/20 hover:bg-purple-500/[0.08] hover:text-white'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`absolute inset-y-2 left-0 w-[3px] rounded-full bg-purple-400 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                        />

                                        <Icon
                                            size={19}
                                            strokeWidth={1.8}
                                            className="shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-purple-300"
                                        />

                                        <span className="text-sm font-medium tracking-wide">
                                            {name}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav
                id="mobile-navigation"
                aria-label="Mobile navigation"
                className={`${isMobileMenuOpen ? 'mt-3 block' : 'hidden'} lg:hidden`}
            >
                <ul className="flex flex-col gap-2">
                    {!user && (
                        <li>
                            <NavLink
                                to="/login"
                                onClick={onMobileMenuClose}
                                className="flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 text-gray-300 transition hover:border-purple-500/20 hover:bg-purple-500/[0.08] hover:text-white"
                            >
                                <LogIn size={19} strokeWidth={1.8} />
                                <span className="text-sm font-medium tracking-wide">Login</span>
                            </NavLink>
                        </li>
                    )}
                    {links.map(({ name, href, Icon }) => (
                        <li key={name}>
                            <NavLink
                                to={href}
                                end={href === "/"}
                                onClick={onMobileMenuClose}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-xl border px-4 py-3 transition ${isActive
                                        ? 'border-purple-500/30 bg-purple-500/10 text-purple-200'
                                        : 'border-transparent text-gray-300 hover:border-purple-500/20 hover:bg-purple-500/[0.08] hover:text-white'
                                    }`
                                }
                            >
                                <Icon size={19} strokeWidth={1.8} />
                                <span className="text-sm font-medium tracking-wide">{name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Bottom community badge */}
            <div className="absolute bottom-6 left-4 right-4 hidden rounded-xl border border-purple-500/15 bg-purple-500/[0.05] p-4 lg:block">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-300">
                        Your Journey Starts Here
                    </span>
                </div>
                {/* <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    Connect. Collaborate. Create impact.
                </p> */}
            </div>

        </aside>
    );
};

export default Sidebar;
