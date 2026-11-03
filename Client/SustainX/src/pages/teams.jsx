import React, { useEffect, useRef, useState } from "react";

// ==========================================
// MENTORS DATA
// ==========================================

const mentors = [
    {
        name: "Shashank Upadhyay",
        role: "Community Mentor",
        image: "/mentor1.jpg",
        description: "MTech (MST) \nIIT-BHU (Varanasi) \nTPR @IIT-BHU \n Ex-Mentor @Unstop",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Prince Gupta",
        role: "Community Mentor",
        image: "/mentor2.jpg",
        description: "BTech (CS) -IV \nNDRF LOR \nEx-Intern @Skool24",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Satvika Panwar",
        role: "Community Mentor",
        image: "/mentor3.jpeg",
        description: "BTech (CS) -IV \nSheFi Scholar S13 \nGSSoC 25",
        linkedin: "#",
        github: "#",
    },
];

// ==========================================
// FOUNDER DATA
// ==========================================

const founder = {
    name: "Arjun Shukla",
    role: "Founder",
    image: "/founder.jpeg",
    description: "BTech (IT) -III \n7x National Hackathon Finalist \nIIT Roorkee Finalist \nIIT-BHU Finalist \nIIT Delhi RDV Top 5 \nEx-Intern @Ma'am GROUP \nGSSoC 26",
    linkedin: "#",
    github: "#",
};

// ==========================================
// CO-FOUNDERS DATA
// ==========================================

const coFounders = [
    {
        name: "Priyanshu Kumar",
        role: "Co-Founder",
        image: "/cofounder1-new.jpeg",
        description: "BTech (IT) -III \n7x National Hackathon Finalist \nIIT Roorkee Finalist \nIIT-BHU Finalist  \nGSSoC 26",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Aakash Gupta",
        role: "Co-Founder",
        image: "/cofounder2-new.jpeg",
        description: "BTech (CS) -III \n7x National Hackathon Finalist \nIIT Roorkee Finalist \nIIT-BHU Finalist \n GSSoC 26",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Muskan Maurya",
        role: "Co-Founder",
        image: "/design.jpeg",
        description: "BTech (IT) -III \n7x National Hackathon Finalist \nIIT Roorkee Finalist \nIIT-BHU Finalist \nNCC Cadet",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Prakhar Gupta",
        role: "Co-Founder",
        image: "/cofounder4.jpeg",
        description: "BTech (CS) -II \nEDC JSSATE \nIIC JSS",
        linkedin: "#",
        github: "#",
    },
];

// ==========================================
// DEPARTMENT TEAMS DATA
// ==========================================

const teams = [
    {
        name: "MERN Stack Team",
        leader: {
            name: "Arjun Shukla",
            role: "Team Lead",
            image: "/founder-new.jpeg",
            description: "Leading full-stack development initiatives and helping members build scalable web applications using the MERN stack.",
            linkedin: "#",
            github: "#",
        },
        subLeader: {
            name: "Aakash Gupta",
            role: "Co-Lead",
            image: "/cofounder2-new2.jpeg",
            description: "Supporting the team in development, project collaboration and technical learning.",
            linkedin: "#",
            github: "#",
        },
    },

    {
        name: "AI / ML Team",
        leader: {
            name: "Khushi Yadav",
            role: "Team Lead",
            image: "/aiml-leader.jpg",
            description: "Exploring artificial intelligence and machine learning through research, experimentation and practical projects.",
            linkedin: "#",
            github: "#",
        },
        subLeader: {
            name: "Priyanshu Kumar",
            role: "Co-Lead",
            image: "/cofounder1.jpeg",
            description: "Helping members understand AI/ML concepts and implement intelligent solutions.",
            linkedin: "#",
            github: "#",
        },
    },

    {
        name: "Java Full Stack Team",
        leader: {
            name: "Prakhar Gupta",
            role: "Team Lead",
            image: "/cofounder4.jpeg",
            description: "Leading Java-based application development and guiding members in backend and frontend technologies.",
            linkedin: "#",
            github: "#",
        },
        subLeader: {
            name: "Shehzan Hussain",
            role: "Co-Lead",
            image: "/java-subleader.jpeg",
            description: "Supporting development activities and collaborative learning within the Java team.",
            linkedin: "#",
            github: "#",
        },
    },

    {
        name: "App Development Team",
        leader: {
            name: "Priyanshi Srivastava",
            role: "Team Lead",
            image: "/app-leader.jpg",
            description: "Leading mobile application development and exploring innovative app experiences.",
            linkedin: "#",
            github: "#",
        },
        subLeader: {
            name: "Aakash Gupta",
            role: "Co-Lead",
            image: "/cofounder2-new2.jpeg",
            description: "Helping members develop mobile applications and improve their practical development skills.",
            linkedin: "#",
            github: "#",
        },
    },

    {
        name: "Women in Tech Team",
        leader: {
            name: "Vanshika Dutt Srivastava",
            role: "Team Lead",
            image: "/women-tech-leader.jpg",
            description: "Encouraging women in technology through collaboration, opportunities, mentorship and community initiatives.",
            linkedin: "#",
            github: "#",
        },
        subLeader: {
            name: "Shubhangi Rajput",
            role: "Co-Lead",
            image: "/women2.jpeg",
            description: "Supporting an inclusive environment and encouraging more women to explore technology and innovation.",
            linkedin: "#",
            github: "#",
        },
    },

    {
        name: "Research & Innovation Team",
        leader: {
            name: "Keshari Nandan Singh",
            role: "Team Lead",
            image: "/research.jpeg",
            description: "Driving research-oriented initiatives, innovative ideas and exploration of emerging technologies.",
            linkedin: "#",
            github: "#",
        },
        subLeader: {
            name: "Co-Lead Name",
            role: "Co-Lead",
            image: "/research-subleader.jpg",
            description: "Supporting research activities, experimentation and collaborative innovation.",
            linkedin: "#",
            github: "#",
        },
    },

    {
        name: "DSA Team",
        leader: {
            name: "Leader Name",
            role: "Team Lead",
            image: "/dsa-leader.jpg",
            description: "Helping members strengthen problem-solving abilities through data structures and algorithms.",
            linkedin: "#",
            github: "#",
        },
        subLeader: {
            name: "Co-Lead Name",
            role: "Co-Lead",
            image: "/dsa-subleader.jpg",
            description: "Supporting coding practice, problem-solving sessions and algorithmic learning.",
            linkedin: "#",
            github: "#",
        },
    },

    {
        name: "Robotics Team",
        leader: {
            name: "Kartikeya Singh",
            role: "Team Lead",
            image: "/robotics.jpeg",
            description: "Leading robotics projects and exploring hardware, automation and intelligent systems.",
            linkedin: "#",
            github: "#",
        },
        subLeader: {
            name: "Co-Lead Name",
            role: "Co-Lead",
            image: "/robotics-subleader.jpg",
            description: "Supporting hands-on experiments, prototyping and collaborative robotics projects.",
            linkedin: "#",
            github: "#",
        },
    },

    {
        name: "Design Team",
        leader: {
            name: "Muskan Maurya",
            role: "Team Lead",
            image: "/design.jpeg",
            description: "Leading creative initiatives, visual storytelling and design experiences across SustainX.",
            linkedin: "#",
            github: "#",
        },
        subLeader: {
            name: "Co-Lead Name",
            role: "Co-Lead",
            image: "/design-subleader.jpg",
            description: "Supporting creative execution, visual design and collaborative branding initiatives.",
            linkedin: "#",
            github: "#",
        },
    },
];

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

const Reveal = ({ children, delay = 0 }) => {
    const revealRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = revealRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.12 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={revealRef}
            style={{
                transitionDelay: visible ? `${delay}ms` : "0ms",
            }}
            className={`
        transition-all duration-700 ease-out
        ${visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-16 opacity-0"
                }
      `}
        >
            {children}
        </div>
    );
};

// ==========================================
// SOCIAL LINKS
// ==========================================

const SocialLinks = ({ linkedin, github }) => {
    return (
        <div className="mt-4 flex items-center justify-center gap-4">

            <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
          rounded-lg border border-[#352443]
          bg-[#17101f] px-4 py-2
          text-sm font-medium text-gray-300
          transition-all duration-300
          hover:border-purple-500
          hover:bg-purple-500/10
          hover:text-purple-300
        "
            >
                LinkedIn ↗
            </a>

            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
          rounded-lg border border-[#352443]
          bg-[#17101f] px-4 py-2
          text-sm font-medium text-gray-300
          transition-all duration-300
          hover:border-purple-500
          hover:bg-purple-500/10
          hover:text-purple-300
        "
            >
                GitHub ↗
            </a>

        </div>
    );
};

// ==========================================
// PROFILE CARD
// ==========================================

const ProfileCard = ({ member, featured = false }) => {
    return (
        <div
            className={`
        group w-full overflow-hidden
        rounded-2xl border border-[#29232f]
        bg-[#111116]
        transition-all duration-300
        hover:-translate-y-2
        hover:border-purple-500
        hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]
        ${featured ? "max-w-sm" : ""}
      `}
        >

            {/* IMAGE */}
            <div
                className={`
          relative w-full overflow-hidden
          bg-[#1b1523]
          ${featured ? "h-80" : "h-64"}
        `}
            >
                <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
                />
            </div>

            {/* MEMBER DETAILS */}
            <div className="p-5 text-center">

                <p className="
          mb-2 text-xs font-bold uppercase
          tracking-[2px] text-purple-400
        ">
                    {member.role}
                </p>

                <h3 className="
          text-lg font-bold text-white
          transition-colors duration-300
          group-hover:text-purple-300
        ">
                    {member.name}
                </h3>

                {/* MEMBER BIO */}
                <p className="
          mx-auto mt-3 max-w-sm
          text-sm leading-6
          text-gray-400 whitespace-pre-line
        ">
                    {member.description}
                </p>

                {/* SOCIAL LINKS */}
                <SocialLinks
                    linkedin={member.linkedin}
                    github={member.github}
                />

            </div>

        </div>
    );
};

// ==========================================
// SECTION HEADING
// ==========================================

const SectionHeading = ({ eyebrow, title, description }) => {
    return (
        <div className="mb-10 text-center">

            <span className="
        text-xs font-bold uppercase
        tracking-[3px] text-purple-400
      ">
                {eyebrow}
            </span>

            <h2 className="
        mt-3 text-2xl md:text-3xl
        font-extrabold text-white
      ">
                {title}
            </h2>

            {description && (
                <p className="
          mx-auto mt-3 max-w-2xl
          text-sm md:text-base
          leading-7 text-gray-400
        ">
                    {description}
                </p>
            )}

            <div className="
        mx-auto mt-5 h-1 w-16
        rounded-full bg-purple-500
      " />

        </div>
    );
};

// ==========================================
// TEAM CONTAINER
// ==========================================

const TeamContainer = ({ team, index }) => {
    return (
        <Reveal delay={100}>

            <div className="
        rounded-3xl
        border border-[#29232f]
        bg-[#0e0e12]
        p-8 md:p-10
        transition-all duration-300
        hover:border-purple-500/40
      ">

                {/* TEAM HEADING */}
                <div className="mb-8">

                    <span className="
            text-xs font-bold uppercase
            tracking-[3px] text-purple-400
          ">
                        Our Department
                    </span>

                    <h2 className="
            mt-3 text-2xl md:text-3xl
            font-extrabold text-white
          ">
                        {team.name}
                    </h2>

                    <div className="
            mt-4 h-1 w-16
            rounded-full bg-purple-500
          " />

                </div>

                {/* TEAM LEAD AND CO-LEAD */}
                <div className="
          mx-auto grid max-w-3xl
          grid-cols-2 gap-5 md:gap-8
          max-[450px]:grid-cols-1
        ">

                    <Reveal delay={100}>
                        <ProfileCard member={team.leader} />
                    </Reveal>

                    <Reveal delay={200}>
                        <ProfileCard member={team.subLeader} />
                    </Reveal>

                </div>

            </div>

        </Reveal>
    );
};

// ==========================================
// MAIN OUR TEAMS COMPONENT
// ==========================================

const OurTeams = () => {
    return (
        <section
            id="our-teams"
            className="
        min-h-screen w-full
        bg-[#080808] text-white
        px-6 md:px-10 lg:px-14
        py-20
        lg:ml-[330px]
        lg:w-[calc(100%-330px)]
        max-lg:ml-0
        max-lg:w-full
      "
        >

            <div className="mx-auto max-w-6xl">

                {/* ==================================
            PAGE HEADING
        ================================== */}

                <Reveal>

                    <div className="mb-16 text-center">

                        <span className="
              text-xs font-bold uppercase
              tracking-[5px] text-purple-400
            ">
                            Connect. Collaborate. Create.
                        </span>

                        <h1 className="
              mt-5 text-4xl md:text-5xl
              font-extrabold tracking-tight
            ">
                            Our Teams
                            <span className="text-purple-500">X</span>
                        </h1>

                        <p className="
              mx-auto mt-5 max-w-2xl
              text-sm md:text-base
              leading-8 text-gray-400
            ">
                            Meet the people behind SustainX.
                            A community of passionate individuals
                            working together to learn, innovate
                            and build meaningful solutions.
                        </p>

                    </div>

                </Reveal>

                {/* ==================================
            1. MEET OUR MENTORS
        ================================== */}

                <Reveal>

                    <div className="
            mb-12 rounded-3xl
            border border-[#29232f]
            bg-[#0e0e12]
            p-8 md:p-10
          ">

                        <SectionHeading
                            eyebrow="Guidance & Inspiration"
                            title="Meet Our Mentors"
                            description="The minds guiding us towards innovation, growth and excellence."
                        />

                        <div className="
              mx-auto grid max-w-5xl
              grid-cols-1 gap-6
              sm:grid-cols-2
              lg:grid-cols-3
            ">

                            {mentors.map((mentor, index) => (
                                <Reveal key={index} delay={index * 150}>
                                    <ProfileCard member={mentor} />
                                </Reveal>
                            ))}

                        </div>

                    </div>

                </Reveal>

                {/* ==================================
            2. FOUNDING MEMBERS
        ================================== */}

                <Reveal>

                    <div className="
            mb-12 rounded-3xl
            border border-[#29232f]
            bg-[#0e0e12]
            p-8 md:p-10
          ">

                        <SectionHeading
                            eyebrow="The People Behind SustainX"
                            title="Founding Members"
                            description="The visionaries building and shaping the SustainX community."
                        />

                        {/* FOUNDER - CENTERED */}
                        <div className="
              mb-14 flex
              justify-center
            ">

                            <Reveal delay={100}>

                                <div className="w-full max-w-sm">
                                    <ProfileCard
                                        member={founder}
                                        featured={true}
                                    />
                                </div>

                            </Reveal>

                        </div>

                        {/* CO-FOUNDERS HEADING */}
                        <div className="mb-8 text-center">

                            <h3 className="
                text-xl md:text-2xl
                font-bold text-purple-300
              ">
                                Co-Founders
                            </h3>

                            <p className="
                mt-2 text-sm text-gray-500
              ">
                                The team that builds SustainX together.
                            </p>

                        </div>

                        {/* FOUR CO-FOUNDERS */}
                        <div className="
              flex flex-row flex-wrap
              justify-center gap-6
            ">

                            {coFounders.map((member, index) => (
                                <div
                                    key={index}
                                    className="
                    w-full sm:w-[calc(50%-12px)]
                    lg:w-[calc(25%-18px)]
                  "
                                >
                                    <Reveal delay={index * 100}>
                                        <ProfileCard member={member} />
                                    </Reveal>
                                </div>
                            ))}

                        </div>

                    </div>

                </Reveal>

                {/* ==================================
            3 TO 11. DEPARTMENT TEAMS
        ================================== */}

                <div className="flex flex-col gap-10">

                    {teams.map((team, index) => (
                        <TeamContainer
                            key={index}
                            team={team}
                            index={index + 1}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default OurTeams;