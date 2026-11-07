import React, { useState } from "react";
import { LockKeyhole, UserRound, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {

            email: email,
            password: password,

        }
        setSubmit(true);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const text = await response.text();
            let data = null;

            if (text) {
                try {
                    data = JSON.parse(text);
                } catch (parseError) {
                    console.error('Invalid login response:', text);
                    throw new Error('Server returned an invalid response');
                }
            }

            if (!response.ok) {
                throw new Error(data?.message || 'Login failed');
            }

            setSubmit(false);
            alert(data?.message || 'Login successful');
        } catch (err) {
            setSubmit(false);
            alert(err.message || 'Error logging in');
        }
    };

    return (
        <div className="relative w-full h-full min-h-0 overflow-y-auto bg-[#080611] text-white flex items-center justify-center px-5 py-10">

            {/* Background Effects */}
            {/* <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" /> */}
            {/* <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none" /> */}

            {/* Login Card */}
            <div className="relative w-full max-w-[430px]">

                <div className="text-center mb-9">
                    {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 shadow-lg shadow-purple-900/30 mb-5">
                        <span className="text-3xl font-black">S</span>
                    </div> */}

                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">SustainX</span>
                    </h1>

                    <p className="text-gray-400 mt-3 text-sm">
                        Login to your SustainX Account
                    </p>
                </div>

                <div className="bg-[#12101f]/90 border border-white/[0.08] rounded-3xl p-7 sm:p-9 shadow-2xl shadow-black/30 backdrop-blur-xl">

                    <form onSubmit={handleLogin} className="space-y-6">

                        {/* Username */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>

                            <div className="relative">
                                <UserRound
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
                                />

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    autoComplete="email"
                                    className="w-full bg-[#0b0915] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <LockKeyhole
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
                                />

                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    autoComplete="current-password"
                                    className="w-full bg-[#0b0915] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                                />
                            </div>
                        </div>

                        {submit ? <div>Loging In</div> : ""}

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={submit}
                            className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 shadow-lg shadow-purple-900/30 transition-all duration-300 hover:shadow-purple-700/30 hover:-translate-y-0.5 cursor-pointer"
                        >
                            Login Now
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>

                    </form>
                </div>

                <p className="text-center text-xs text-gray-600 mt-7">
                    © 2026 SustainX. Build. Collaborate. Compete. Grow.
                </p>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-400">
                        New to SustainX?{" "}

                        <NavLink to="/signup">

                            <button
                                type="button"
                                onClick={() => navigate("/register")}
                                className="text-purple-400 font-semibold hover:text-fuchsia-400 transition-colors cursor-pointer"
                            >
                                Create Account Now
                            </button>

                        </NavLink>


                    </p>
                </div>

            </div>


        </div>
    );
};

export default Login;
