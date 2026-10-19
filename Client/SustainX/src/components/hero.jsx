import logo from "../assets/sustainx-logo.png";
import React from "react";
import { Trophy, Network, Code2, ArrowUpRight } from 'lucide-react';


const Hero = () => {

    return (

        <>

            <section
                id="home"
                className="relative min-h-[calc(100vh-5rem)] overflow-hidden px-5 py-16 sm:px-8 md:ml-64 lg:px-12"
            >
                {/* Ambient purple glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px] sm:h-96 sm:w-96" />

                {/* Hero content */}
                <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">

                    {/* Logo */}
                    <div className="group relative mb-8">
                        <div className="absolute inset-0 rounded-3xl bg-purple-500/20 blur-2xl transition duration-500 group-hover:bg-purple-500/35" />

                        <img
                            src={logo}
                            alt="SustainX community logo"
                            className="relative h-28 w-28 rounded-3xl border border-purple-400/30 object-contain shadow-[0_0_35px_rgba(168,85,247,0.12)] transition duration-500 group-hover:scale-105 sm:h-36 sm:w-36"
                        />
                    </div>

                    {/* Small label */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-4 py-2">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                        <span className="text-xs font-medium uppercase tracking-[0.22em] text-purple-200 sm:text-sm">
                            Welcome Hackers !!
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                        SUSTAIN
                        <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.2)]">
                            X
                        </span>
                    </h1>

                    {/* Tagline */}
                    <h2 className="mt-5 text-xl font-semibold text-gray-200 sm:text-2xl md:text-3xl">
                        Hackathons | Freelance |
                        <span className="text-purple-300"> Projects</span>
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                        Participate in hackathons with expert guidance and mentorship, connect with a network of freelancers to collaborate on opportunities and Earn Money, and build real-world projects with fellow developers
                    </p>

                    {/* Call to action */}
                    <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
                        <a
                            href="#about"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-7 py-3.5 font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.4)]"
                        >
                            Discover SustainX
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                        {/* <a
                            href="#teams"
                            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 font-semibold text-gray-300 transition duration-300 hover:border-purple-400/40 hover:bg-purple-500/[0.08] hover:text-white"
                        >
                            Explore Our Teams
                        </a> */}
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-12 flex items-center gap-3">
                        <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400/70" />
                        <span className="text-xs tracking-[0.25em] text-gray-500">
                            CONNECT · COLLABORATE · SUSTAIN
                        </span>
                        <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400/70" />
                    </div>

                </div>

                


            </section>



        </>

    )
}

export default Hero;