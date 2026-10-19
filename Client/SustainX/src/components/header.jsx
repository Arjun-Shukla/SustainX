import react from 'react'
import { LogIn } from 'lucide-react';
import logo from '../assets/sustainx-logo.png'

const Header = () => {

    return (
        <>

            <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-[#080B0B]/95 backdrop-blur-xl">
                <div className="relative mx-auto flex h-20 w-full items-center justify-between px-5 sm:px-8">

                    {/* {left} */}

                    <a
                        href="/"
                        className="flex h-18 w-18 shrink-0 items-center overflow-hidden rounded-2xl border border-purple-500/30"
                    >
                        <img
                            src={logo}
                            alt="SustainX"
                            className="h-full w-full rounded-2xl object-contain"
                        />
                    </a>

                    {/* {center} */}

                    <div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-2xl font-extrabold tracking-tight sm:text-3xl">

                        <span className="text-white">Sustain</span>
                        <span className="text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                            X
                        </span>

                    </div>

                    {/* {right} */}


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


                </div>
            </header>
        </>

    );
}

export default Header;