import { useState } from "react";
import {
    UserRound,
    Mail,
    Phone,
    LockKeyhole,
    MapPin,
    ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        city: "",
        state: "",
    });

    const [submit, setSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        setSubmit(true);

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const text = await response.text();
            let data = null;

            if (text) {
                try {
                    data = JSON.parse(text);
                } catch (parseError) {
                    console.error('Non-JSON response received:', text);
                    throw new Error('Server returned an invalid response. Check if the backend is running.', {
                        cause: parseError,
                    });
                }
            }

            if (!response.ok) {
                throw new Error(data?.error || data?.message || 'Signup failed');
            }

            console.log('User created:', data?.user);
            alert('Account created successfully');
            setSubmit(false);
        } catch (error) {
            console.error('Signup error:', error);
            alert(error.message || 'Something went wrong while creating your account');
            setSubmit(false);
        }
    };

    const inputClass =
        "w-full bg-[#0b0915] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20";

    const fields = [
        {
            name: "firstName",
            label: "First Name",
            placeholder: "Enter your first name",
            type: "text",
            icon: UserRound,
            autoComplete: "given-name",
        },
        {
            name: "lastName",
            label: "Last Name",
            placeholder: "Enter your last name",
            type: "text",
            icon: UserRound,
            autoComplete: "family-name",
        },
        {
            name: "email",
            label: "Email Address",
            placeholder: "Enter your email address",
            type: "email",
            icon: Mail,
            autoComplete: "email",
        },
        {
            name: "mobile",
            label: "Mobile Number",
            placeholder: "Enter your mobile number",
            type: "tel",
            icon: Phone,
            autoComplete: "tel",
        },
        {
            name: "password",
            label: "Password",
            placeholder: "Create a password",
            type: "password",
            icon: LockKeyhole,
            autoComplete: "new-password",
        },
        {
            name: "city",
            label: "City",
            placeholder: "Enter your city",
            type: "text",
            icon: MapPin,
            autoComplete: "address-level2",
        },
        {
            name: "state",
            label: "State",
            placeholder: "Enter your state",
            type: "text",
            icon: MapPin,
            autoComplete: "address-level1",
        },
    ];

    return (
        <div className="relative w-full h-full min-h-0 overflow-y-auto bg-[#080611] text-white flex items-center justify-center px-5 py-10">

            {/* Background Effects */}
            {/* <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" /> */}
            {/* <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none" /> */}

            {/* Registration Container */}
            <div className="relative w-full max-w-[480px] my-auto">

                {/* Heading */}
                <div className="text-center mb-8">
                    {/* <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 shadow-lg shadow-purple-900/30 mb-5">
                        <span className="text-3xl font-black">S</span>
                    </div> */}

                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Join{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                            SustainX
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-3 text-sm">
                        Create your SustainX Account and be part of something bigger.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-[#12101f]/90 border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">

                    <form onSubmit={handleRegister} className="space-y-5">

                        {fields.map((field) => {
                            const Icon = field.icon;

                            return (
                                <div key={field.name}>
                                    <label
                                        htmlFor={field.name}
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        {field.label}
                                    </label>

                                    <div className="relative">
                                        <Icon
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
                                        />

                                        <input
                                            id={field.name}
                                            name={field.name}
                                            type={field.type}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            placeholder={field.placeholder}
                                            autoComplete={field.autoComplete}
                                            required
                                            minLength={field.name === "password" ? 8 : undefined}
                                            maxLength={field.name === "mobile" ? 15 : undefined}
                                            className={inputClass}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                        {submit ? <div>Creating Account</div> : ""}

                        {/* Create Account Button */}
                        <button
                            type="submit"
                            disabled={submit}
                            className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 shadow-lg shadow-purple-900/30 transition-all duration-300 hover:shadow-purple-700/30 hover:-translate-y-0.5 mt-3 cursor-pointer"
                        >
                            Create Account
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>

                    </form>
                </div>

                {/* Login Redirect */}
                <p className="text-center text-sm text-gray-400 mt-6">
                    Already have an account?{" "}

                    <NavLink to="/login">

                        <button
                            type="button"
                            // onClick={() => navigate("/login")}
                            className="text-purple-400 font-semibold hover:text-fuchsia-400 transition-colors cursor-pointer"
                        >
                            Login Now
                        </button>

                    </NavLink>

                </p>

                <p className="text-center text-xs text-gray-600 mt-6">
                    © 2026 SustainX. Build. Collaborate. Compete. Grow.
                </p>

            </div>
        </div>
    );
};

export default Signup;
