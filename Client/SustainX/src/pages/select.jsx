import { useState } from "react";
import { Check, Users, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const teams = [
    "MERN Stack Team",
    "AI/ML Team",
    "Java Full Stack Team",
    "App Development Team",
    "Women in Tech Team",
    "Research and Innovation Team",
    "DSA Team",
    "Robotics Team",
    "Design Team",
];

const contributionHours = [
    "5 Hours",
    "15 Hours",
    "21 Hours",
    "30+ Hours",
    "60+ Hours",
];

const TeamSelection = () => {
    const [selectedTeams, setSelectedTeams] = useState([]);
    const [selectedHours, setSelectedHours] = useState("");
    const [submit, setSubmit] = useState(false);
    const [message, setMessage] = useState("");

    const handleTeamSelection = (team) => {
        setSelectedTeams((prev) =>
            prev.includes(team)
                ? prev.filter((item) => item !== team)
                : [...prev, team]
        );
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedTeams.length === 0) {
            setMessage("Please select at least one team.");
            return;
        }

        if (!selectedHours) {
            setMessage("Please select your weekly contribution hours.");
            return;
        }

        setSubmit(true);

        const formData = {

            planId: sessionStorage.getItem('selectedPlanId'),
            teams: selectedTeams,
            contributionHours: selectedHours,

        };

        try {

            const response = await fetch('/api/select', {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formData)

            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || "Unable to submit team selection.");
            }

            sessionStorage.removeItem('selectedPlanId');
            navigate('/');

        }

        catch (err) {
            setMessage(err.message || "Error occurred while submitting team selection.");
        } finally {
            setSubmit(false);
        }

    };

    return (
        <div className="relative w-full h-full min-h-0 bg-[#080611] text-white overflow-x-hidden overflow-y-auto px-5 sm:px-8 lg:px-12 py-10">

            {/* Background Effects */}
            {/* <div className="absolute top-0 left-0 w-80 h-80 bg-purple-700/20 blur-[130px] rounded-full pointer-events-none" /> */}

            {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-700/20 blur-[140px] rounded-full pointer-events-none" /> */}

            <div className="relative z-10 max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">

                    <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-purple-500/20 border border-purple-400/20 flex items-center justify-center">
                        <Users size={28} className="text-purple-300" />
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold">
                        Choose Your{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                            Teams
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-4 text-sm sm:text-base">
                        Select the teams you'd love to be a part of at SustainX.
                    </p>

                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 mx-auto mt-6 rounded-full" />

                </div>

                {/* Team Selection */}
                <div className="mb-14">

                    <div className="flex items-center justify-between mb-6 flex-wrap gap-3">

                        <div>
                            <h2 className="text-xl font-bold">
                                Select Your Teams
                            </h2>

                            <p className="text-gray-500 text-sm mt-1">
                                You can select multiple teams.
                            </p>
                        </div>

                        <span className="text-purple-300 text-sm bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full">
                            {selectedTeams.length} / 9 Selected
                        </span>

                    </div>

                    {/* Teams Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        {teams.map((team) => {
                            const isSelected = selectedTeams.includes(team);

                            return (
                                <button
                                    key={team}
                                    type="button"
                                    onClick={() => handleTeamSelection(team)}
                                    className={`
                    relative min-h-[85px] rounded-2xl px-5 py-4
                    border text-left transition-all duration-300
                    flex items-center justify-between gap-3 cursor-pointer
                    ${isSelected
                                            ? "border-purple-500 bg-purple-600/15 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                                            : "border-white/10 bg-white/[0.03] hover:border-purple-400/50 hover:bg-purple-500/[0.07]"
                                        }
                  `}
                                >

                                    <span className={`text-sm sm:text-base font-medium ${isSelected ? "text-purple-200" : "text-gray-300"
                                        }`}>
                                        {team}
                                    </span>

                                    <span className={`w-6 h-6 shrink-0 rounded-lg border flex items-center justify-center transition-all ${isSelected
                                        ? "bg-purple-500 border-purple-400"
                                        : "border-gray-600"
                                        }`}>
                                        {isSelected && (
                                            <Check size={15} strokeWidth={3} />
                                        )}
                                    </span>

                                </button>
                            );
                        })}

                    </div>
                </div>

                {/* Contribution Hours */}
                <div className="max-w-3xl mx-auto mb-12">

                    <div className="text-center mb-8">

                        <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-purple-500/20 border border-purple-400/20 flex items-center justify-center">
                            <Clock size={24} className="text-purple-300" />
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold">
                            Weekly Contribution Hours
                        </h2>

                        <p className="text-gray-400 text-sm mt-3">
                            How much time can you dedicate to Yourself every week?
                        </p>

                    </div>

                    {/* Hours Options */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">

                        {contributionHours.map((hours) => {
                            const isSelected = selectedHours === hours;

                            return (
                                <button
                                    key={hours}
                                    type="button"
                                    onClick={() => setSelectedHours(hours)}
                                    className={`
                    rounded-2xl py-5 px-3 border
                    transition-all duration-300
                    flex flex-col items-center justify-center gap-3 cursor-pointer
                    ${isSelected
                                            ? "border-purple-500 bg-purple-600/20 text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                                            : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-purple-400/50 hover:text-white"
                                        }
                  `}
                                >

                                    <span className="text-lg font-bold">
                                        {hours}
                                    </span>

                                    {isSelected && (
                                        <Check size={17} className="text-purple-400" />
                                    )}

                                </button>
                            );
                        })}

                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pb-8">

                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={submit}
                        aria-busy={submit}
                        className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-14 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] disabled:cursor-wait disabled:opacity-80"
                    >
                        {submit ? "Submitting..." : "Submit"}

                        <ArrowRight
                            size={21}
                            className={`transition-transform group-hover:translate-x-1 ${submit ? "invisible" : ""}`}
                        />

                        {submit && (
                            <span
                                role="progressbar"
                                aria-label="Submitting team selection"
                                className="absolute inset-x-0 bottom-0 h-1 overflow-hidden bg-white/20"
                            >
                                <span className="block h-full w-1/3 animate-[account-progress_1.4s_ease-in-out_infinite] bg-gradient-to-r from-purple-200 via-white to-fuchsia-200" />
                            </span>
                        )}
                    </button>

                </div>

            </div>

            {message && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
                    role="presentation"
                >
                    <div
                        role="alertdialog"
                        aria-modal="true"
                        aria-labelledby="team-selection-message"
                        className="w-full max-w-md rounded-2xl border border-purple-400/30 bg-[#12101f] p-6 text-center shadow-[0_0_40px_rgba(168,85,247,0.2)]"
                    >
                        <p id="team-selection-message" className="text-base leading-relaxed text-purple-100">
                            {message}
                        </p>
                        <button
                            type="button"
                            onClick={() => setMessage("")}
                            className="mt-6 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-2.5 font-semibold text-white transition hover:from-purple-500 hover:to-fuchsia-500"
                        >
                            Go
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamSelection;
