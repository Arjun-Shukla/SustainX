import { GraduationCap, Landmark, School } from 'lucide-react';

const networkStats = [
    { count: '3', label: 'IITs', Icon: Landmark },
    { count: '2', label: 'NITs', Icon: GraduationCap },
    { count: '4+', label: 'Other Colleges', Icon: School },
];

const NetworkStats = () => (
    <section
        aria-labelledby="sustainx-network-title"
        className="relative overflow-hidden bg-[#080B0B] px-5 pb-20 pt-10 text-white sm:px-8 lg:px-10"
    >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.08] blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl rounded-3xl border border-white/[0.08] bg-[#101015] px-6 py-10 shadow-[0_16px_45px_rgba(168,85,247,0.08)] sm:px-10">
            <h2
                id="sustainx-network-title"
                className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl"
            >
                Our <span className="bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent">SustainX Network</span>
            </h2>
            <div className="mx-auto mb-8 mt-5 w-fit rounded-2xl bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 p-px shadow-[0_0_28px_rgba(250,204,21,0.22)]">
                <p className="rounded-[15px] bg-[#17140a] px-7 py-3 text-center text-lg font-extrabold tracking-wide text-yellow-200 sm:px-9 sm:text-xl">
                    9+ Colleges
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {networkStats.map(({ count, label, Icon }) => (
                    <article
                        key={label}
                        className="flex items-center justify-center gap-4 rounded-2xl border border-purple-400/15 bg-purple-500/[0.05] px-5 py-5 transition-colors hover:border-purple-400/35 hover:bg-purple-500/[0.09]"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/[0.08] text-purple-300">
                            <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                        </div>
                        <div>
                            <p className="text-2xl font-extrabold leading-none text-white sm:text-3xl">{count}</p>
                            <p className="mt-2 text-sm font-medium text-gray-400">{label}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default NetworkStats;
