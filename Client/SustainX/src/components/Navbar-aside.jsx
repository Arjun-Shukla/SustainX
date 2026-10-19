import React from 'react';
import { House, Info, Users, Mail } from 'lucide-react';


const Sidebar = () => {
    const links = [
        { name: 'Home', href: '#home', Icon: House },
        { name: 'About Us', href: '#about', Icon: Info },
        { name: 'Our Teams', href: '#teams', Icon: Users },
        { name: 'Contact Us', href: '#contact', Icon: Mail },
    ];

    return (
        <aside className="fixed left-0 top-20 z-40 h-[calc(100vh-5rem)] w-64 border-r border-purple-500/20 bg-[#0B0B0F]/95 px-4 py-8 backdrop-blur-xl">

            {/* Sidebar heading */}
            <div className="mb-8 px-3">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                    Workspace
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    Explore SustainX
                </p>
            </div>

            {/* Navigation links */}
            <nav aria-label="Main navigation">
                <ul className="space-y-3">
                    {links.map(({ name, href, Icon }, index) => (
                        <li key={name}>
                            <a
                                href={href}
                                className={`group relative flex items-center gap-4 overflow-hidden rounded-xl border px-4 py-3.5 transition-all duration-300 ease-out
                  ${index === 0
                                        ? 'border-purple-500/30 bg-purple-500/10 text-purple-200 shadow-[inset_0_0_20px_rgba(168,85,247,0.04)]'
                                        : 'border-transparent text-gray-400 hover:translate-x-1 hover:border-purple-500/20 hover:bg-purple-500/[0.08] hover:text-white'
                                    }`}
                            >
                                {/* Hover accent */}
                                <span className={`absolute inset-y-2 left-0 w-[3px] rounded-full bg-purple-400 transition-opacity duration-300 ${index === 0
                                    ? 'opacity-100'
                                    : 'opacity-0 group-hover:opacity-100'
                                    }`} />

                                <Icon
                                    size={19}
                                    strokeWidth={1.8}
                                    className={`shrink-0 transition-all duration-300 ${index === 0
                                        ? 'text-purple-300'
                                        : 'text-gray-500 group-hover:scale-110 group-hover:text-purple-300'
                                        }`}
                                />

                                <span className="text-sm font-medium tracking-wide">
                                    {name}
                                </span>

                                {index === 0 && (
                                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.9)]" />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Bottom community badge */}
            <div className="absolute bottom-6 left-4 right-4 rounded-xl border border-purple-500/15 bg-purple-500/[0.05] p-4">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                    <span className="text-xs font-medium text-gray-300">
                        Sustainability starts here
                    </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    Connect. Collaborate. Create impact.
                </p>
            </div>

        </aside>
    );
};

export default Sidebar;
