import React from 'react';
import { Trophy, Network, Code2, ArrowUpRight } from 'lucide-react';

const services = [
    {
        number: '01',
        label: 'COMPETE',
        title: 'Hackathon Support',
        description:
            'Get hackathon guidance, mentorship, team support, and preparation help to turn your ideas into competitive solutions.',
        action: 'Learn & Compete',
        Icon: Trophy,
    },
    {
        number: '02',
        label: 'CONNECT',
        title: 'Freelance Network',
        description:
            'EARN MONEY , Connect with skilled creators, discover collaboration opportunities, and work together on freelance projects.',
        action: 'Connect & Collaborate',
        Icon: Network,
    },
    {
        number: '03',
        label: 'BUILD',
        title: 'Real-World Projects',
        description:
            'Build practical applications with fellow developers, solve real problems, and create projects that strengthen your portfolio.',
        action: 'Build & Innovate',
        Icon: Code2,
    },
];

const ServiceCards = () => {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#080B0B] px-5 text-white sm:px-8 lg:px-10 md:ml-64"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-600/[0.08] blur-[100px]" />

            <div className="relative z-10 mx-auto w-full max-w-6xl">

                {/* Section heading */}
                <div className="mb-10 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                        What We Offer
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                        Everything You Need to
                        <span className="mt-2 block bg-gradient-to-r from-purple-300 via-purple-500 to-fuchsia-400 bg-clip-text text-transparent">
                            Build & Grow
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                        The right guidance, the right connections, and the right
                        opportunities to turn your potential into real-world impact.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {services.map(({ number, label, title, description, action, Icon }) => (
                        <article
                            key={number}
                            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101015] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/40 hover:bg-[#131019] hover:shadow-[0_16px_45px_rgba(168,85,247,0.10)] sm:p-7"
                        >
                            {/* Hover glow */}
                            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/[0.06] blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

                            {/* Number and icon */}
                            <div className="relative flex items-center justify-between">
                                <span className="text-xs font-semibold tracking-[0.2em] text-purple-400">
                                    {number} / {label}
                                </span>

                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/[0.08] text-purple-300 transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_22px_rgba(168,85,247,0.18)]">
                                    <Icon size={23} strokeWidth={1.7} />
                                </div>
                            </div>

                            {/* Card content */}
                            <h3 className="relative mt-7 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-purple-200 sm:text-2xl">
                                {title}
                            </h3>

                            <p className="relative mt-3 flex-1 text-sm leading-7 text-gray-400">
                                {description}
                            </p>

                            {/* Bottom accent */}
                            <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                                <span className="text-sm font-semibold text-gray-300 transition-colors group-hover:text-purple-300">
                                    {action}
                                </span>

                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/10 group-hover:text-purple-300">
                                    <ArrowUpRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </div>
                            </div>

                            {/* Bottom glowing line */}
                            <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent transition-all duration-500 group-hover:w-3/4" />
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceCards;
