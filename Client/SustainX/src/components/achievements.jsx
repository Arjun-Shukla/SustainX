
import React, { useEffect, useRef, useState } from "react";

// LEFT SIDE ACHIEVEMENTS
const leftAchievements = [
    {
        title: "National Hackathon",
        image: "/ach1.jpg",
        description:
            "Recognized for developing innovative solutions and showcasing technical excellence at a national-level hackathon.",
    },
    {
        title: "IIT Delhi",
        image: "/ach2.jpg",
        description:
            "Participated in events and showcased creativity, teamwork and innovation at IIT Delhi.",
    },
    {
        title: "Open Source Contribution",
        image: "/ach3.jpg",
        description:
            "Contributed to open-source projects, collaborated with developers and gained practical development experience.",
    },
    {
        title: "Hackathon Finalist",
        image: "/ach4.jpg",
        description:
            "Achieved a finalist position among competing teams through innovative ideas and collaborative efforts.",
    },
];

// RIGHT SIDE ACHIEVEMENTS
const rightAchievements = [
    {
        title: "DTU Hackathon",
        image: "/ach5.jpg",
        description:
            "Participated in a competitive hackathon at Delhi Technological University and explored innovative ideas.",
    },
    {
        title: "Community Leadership",
        image: "/ach6.jpg",
        description:
            "Building and leading SustainX, bringing developers together to learn, collaborate and create.",
    },
    {
        title: "Project Recognition",
        image: "/ach7.jpg",
        description:
            "Showcasing practical technology solutions through project development and collaborative innovation.",
    },
    {
        title: "Technical Excellence",
        image: "/ach8.jpg",
        description:
            "Continuously learning, experimenting with emerging technologies and building meaningful projects.",
    },
];

// ACHIEVEMENT CARD
const AchievementCard = ({ item, index, side }) => {
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15,
            }
        );

        const currentCard = cardRef.current;

        if (currentCard) {
            observer.observe(currentCard);
        }

        return () => {
            if (currentCard) observer.unobserve(currentCard);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`
        group overflow-hidden rounded-2xl
        border border-[#29232f]
        bg-[#111116]
        transition-all duration-700 ease-out
        hover:-translate-y-2
        hover:border-purple-500
        hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]
        ${visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }
      `}
            style={{
                transitionDelay: visible
                    ? `${index * 100 + (side === "right" ? 150 : 0)}ms`
                    : "0ms",
            }}
        >
            {/* IMAGE SECTION */}
            <div className="relative h-64 w-full overflow-hidden bg-[#1b1523]">
                <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
                />

                <div className="
          absolute inset-0
          bg-gradient-to-t from-black/30 to-transparent
          opacity-60
        " />
            </div>

            {/* TEXT SECTION */}
            <div className="p-6">
                <h3 className="
          mb-3 text-xl font-bold
          text-purple-300
          transition-colors duration-300
          group-hover:text-purple-400
        ">
                    {item.title}
                </h3>

                <p className="
          text-sm leading-7
          text-gray-400
        ">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

// MAIN ACHIEVEMENTS COMPONENT
const Achievements = () => {
    return (
        <section
            id="achievements"
            className="
    min-h-screen
    bg-[#080808]
    text-white
    py-24
    px-8 md:px-12
    lg:ml-[330px]
    lg:w-[calc(100%-330px)]
    max-lg:ml-0
    max-lg:w-full
  "
        >

            {/* SECTION HEADING */}
            <div className="mb-16 mx-auto max-w-4xl text-center">

                <span className="
          text-xs font-bold uppercase
          tracking-[4px] text-purple-400
        ">
                    Our Journey
                </span>

                <h2 className="
          my-4 text-4xl font-extrabold
          tracking-tight
        ">
                    Achievements
                    <span className="text-purple-500">X</span>
                </h2>

                <p className="
          mx-auto max-w-xl
          text-base leading-8
          text-gray-400
        ">
                    Every milestone tells a story of dedication,
                    collaboration and continuous growth.
                    Celebrating the moments that define our journey.
                </p>

            </div>

            {/* ACHIEVEMENTS GALLERY */}
            <div className="
  mx-auto
  flex
  w-full
  max-w-5xl
  items-start
  justify-center
  gap-8
  max-[550px]:flex-col
">

                {/* LEFT COLUMN */}
                <div className="
          flex min-w-0 flex-1
          flex-col gap-9
          max-[550px]:w-full
        ">
                    {leftAchievements.map((item, index) => (
                        <AchievementCard
                            key={index}
                            item={item}
                            index={index}
                            side="left"
                        />
                    ))}
                </div>

                {/* RIGHT COLUMN */}
                <div className="
          flex min-w-0 flex-1
          flex-col gap-9
          max-[550px]:w-full
        ">
                    {rightAchievements.map((item, index) => (
                        <AchievementCard
                            key={index}
                            item={item}
                            index={index}
                            side="right"
                        />
                    ))}
                </div>

            </div>

        </section>
    );
};

export default Achievements;
