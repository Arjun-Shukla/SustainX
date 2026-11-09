import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Check, Rocket, Zap, Crown, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

const plans = [
    {
        id: "free",
        name: "SustainX Free",
        tagline: "Get started with SustainX",
        price: 0,
        icon: Rocket,
        features: [
            "Project support",
            "Free mentorship",
            "Community networking and collaboration",
        ],
    },
    {
        id: "plus",
        name: "SustainX Plus",
        tagline: "Level up your project journey",
        price: 49,
        icon: Zap,
        popular: true,
        features: [
            "Everything in SustainX Free",
            "Hackathon support and guidance",
            "PPT evaluation, mentorship and hackathon opportunities updates",
        ],
    },
    {
        id: "pro",
        name: "SustainX Pro",
        tagline: "Unlock greater opportunities",
        price: 99,
        icon: Crown,
        features: [
            "Everything in SustainX Plus",
            "Freelance Network Access",
            "Earn Money/Get Paid",
        ],
    },
];

const Join = () => {
    //   const navigate = useNavigate();

    // const {

    //     register,
    //     handleSubmit,
    //     formState: { errors, isSubmitting },

    // } = useForm();

    const [selectedPlan, setSelectedPlan] = useState("plus");
    const [submit, setSubmit] = useState(false);
    const navigate = useNavigate();

    const handleNext = async () => {
        setSubmit(true);

        try {
            const response = await fetch('/api/join', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ plan: selectedPlan }),
            });

            const text = await response.text();
            let data = null;

            try {
                data = text ? JSON.parse(text) : null;
            } catch {
                throw new Error('The server returned HTML instead of JSON. Make sure the backend is running on port 80 and the /api/join route is available.');
            }

            if (!response.ok || !data?.success) {
                throw new Error(data?.message || 'Failed to save selected plan');
            }

            if (!data.planId) {
                throw new Error('The server did not return the saved plan ID.');
            }

            sessionStorage.setItem('selectedPlanId', data.planId);
            alert('Plan Selected');
            navigate('/select');
        } catch (err) {
            alert(err?.message || 'Failed to continue');
        } finally {
            setSubmit(false);
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#080611] text-white relative overflow-hidden flex flex-col items-center justify-center px-5 py-16">

            {/* Background Effects */}
            {/* <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-700/30 blur-[130px] rounded-full pointer-events-none" /> */}
            {/* <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-fuchsia-700/30 blur-[130px] rounded-full pointer-events-none" /> */}

            {/* Heading */}
            <div className="relative z-10 text-center mb-14">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Choose Your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                        SustainX
                    </span>{" "}
                    Plan
                </h1>

                <p className="text-gray-400 mt-4 text-base md:text-lg">
                    Build, collaborate and grow with the right membership for you.
                </p>

                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-6 rounded-full" />
            </div>

            {/* Subscription Cards */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-7 w-full max-w-6xl">

                {plans.map((plan) => {
                    const Icon = plan.icon;
                    const isSelected = selectedPlan === plan.id;

                    return (
                        <div
                            key={plan.id}
                            onClick={() => setSelectedPlan(plan.id)}
                            className={`relative cursor-pointer rounded-3xl p-7 border transition-all duration-300 flex flex-col min-h-[390px]
                ${isSelected
                                    ? "border-purple-500 bg-purple-950/30 shadow-[0_0_35px_rgba(168,85,247,0.25)] scale-[1.02]"
                                    : "border-white/10 bg-white/[0.03] hover:border-purple-400/50 hover:bg-white/[0.06]"
                                }`}
                        >

                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 right-6 bg-gradient-to-r from-purple-600 to-fuchsia-500 px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                                    ✦ Most Popular
                                </div>
                            )}

                            {/* Plan Icon */}
                            <div className="flex items-center gap-4 mb-7">
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/20 flex items-center justify-center">
                                    <Icon size={27} className="text-purple-300" />
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold">
                                        {plan.name}
                                    </h2>
                                    <p className="text-gray-400 text-sm mt-1">
                                        {plan.tagline}
                                    </p>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="mb-7">
                                <span className="text-4xl font-bold">
                                    ₹{plan.price}
                                </span>
                                <span className="text-purple-300 ml-2">
                                    / month
                                </span>
                            </div>

                            <div className="h-px bg-white/10 mb-7" />

                            {/* Features */}
                            <ul className="space-y-5 flex-1">
                                {plan.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-gray-200 text-sm md:text-base"
                                    >
                                        <span className="w-6 h-6 shrink-0 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center">
                                            <Check size={15} strokeWidth={3} />
                                        </span>

                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Selection Indicator */}
                            <div className="mt-7 flex items-center gap-2 text-sm">
                                <div
                                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected
                                        ? "border-purple-400 bg-purple-500"
                                        : "border-gray-500"
                                        }`}
                                >
                                    {isSelected && (
                                        <Check size={11} strokeWidth={3} />
                                    )}
                                </div>

                                <span className={isSelected ? "text-purple-300" : "text-gray-500"}>
                                    {isSelected ? "Selected Plan" : "Select this plan"}
                                </span>
                            </div>

                        </div>
                    );
                })}
            </div>

            {/* Next Button */}
            <div className="relative z-10 mt-14">

                {submit ? <div>Loading</div> : ""}

                <button
                    type="button"
                    onClick={handleNext}
                    disabled={submit}
                    className="group flex items-center gap-3 px-16 py-4 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-105 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {submit ? 'Loading...' : 'Next'}
                    <ArrowRight
                        size={22}
                        className="group-hover:translate-x-1 transition-transform"
                    />
                </button>

            </div>

        </div>
    );
};

export default Join;
