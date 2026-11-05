import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
        w-full
        bg-[#080808]
        text-white
        border-t border-[#29232f]
        px-8 md:px-12 lg:px-16
        pt-16 pb-8
        lg:ml-64
        lg:w-[calc(100%-16rem)]
        max-lg:ml-0
        max-lg:w-full
      "
    >
      {/* MAIN FOOTER */}
      <div className="
        mx-auto
        max-w-7xl
        flex
        justify-between
        gap-16
        max-md:flex-col
        max-md:gap-12
      ">

        {/* LEFT SECTION */}
        <div className="
          flex
          flex-col
          justify-between
          gap-12
          flex-1
        ">

          {/* LOGO */}
          <div>
            <a href="/" className="inline-flex items-center">
              <img
                src="/sustainx-logo.png"
                alt="SustainX Logo"
                className="
                  h-20
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-105
                  rounded-2xl
                "
              />
            </a>

            <p className="
              mt-5
              max-w-sm
              text-sm
              leading-7
              text-gray-400
            ">
              Building a community of innovators,
              developers and Freelancers to connect,
              collaborate and Crown Hackathons and Freelance skills.
            </p>
          </div>

          {/* HEAD OFFICE ADDRESS */}
          <div>
            <h3 className="
              mb-4
              text-sm
              font-bold
              uppercase
              tracking-[3px]
              text-purple-400
            ">
              Head Office
            </h3>

            <p className="
              max-w-xs
              text-sm
              leading-7
              text-gray-400
            ">
              26, APJ, CCSU Meerut
              <br />
              Uttar Pradesh, India.
            </p>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="
          flex
          flex-1
          flex-col
          justify-between
          gap-12
        ">

          {/* NAVIGATION LINKS */}
          <div>
            <h3 className="
              mb-6
              text-sm
              font-bold
              uppercase
              tracking-[3px]
              text-purple-400
            ">
              Quick Links
            </h3>

            <div className="
              flex
              flex-wrap
              gap-x-10
              gap-y-5
            ">

              <a
                href="/"
                className="
                  text-sm
                  font-medium
                  text-gray-300
                  transition-colors
                  duration-300
                  hover:text-purple-400
                "
              >
                Home
              </a>

              <a
                href="/about"
                className="
                  text-sm
                  font-medium
                  text-gray-300
                  transition-colors
                  duration-300
                  hover:text-purple-400
                "
              >
                About Us
              </a>

              <a
                href="/teams"
                className="
                  text-sm
                  font-medium
                  text-gray-300
                  transition-colors
                  duration-300
                  hover:text-purple-400
                "
              >
                Our Teams
              </a>

            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h3 className="
              mb-6
              text-sm
              font-bold
              uppercase
              tracking-[3px]
              text-purple-400
            ">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-5">

              {/* MOBILE NUMBER */}
              <a
                href="tel:+917607104099"
                className="
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-gray-300
                  transition-colors
                  duration-300
                  hover:text-purple-400
                "
              >
                <span className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  border border-[#352443]
                  bg-[#17101f]
                  text-purple-400
                ">
                  ☎
                </span>

                +91 7607104099
              </a>

              {/* EMAIL */}
              <a
                href="mailto:sustainx.community@gmail.com"
                className="
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-gray-300
                  transition-colors
                  duration-300
                  hover:text-purple-400
                "
              >
                <span className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-xl
                  border border-[#352443]
                  bg-[#17101f]
                  text-purple-400
                ">
                  ✉
                </span>

                sustainx.community@gmail.com
              </a>

            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="
        mx-auto
        mt-16
        max-w-7xl
        border-t
        border-[#29232f]
        pt-7
        flex
        items-center
        justify-between
        gap-4
        max-sm:flex-col
        max-sm:items-start
      ">

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} SustainX
        </p>

        <p className="
          text-xs
          text-gray-500
        ">
          Hack. Freelance. Network.
        </p>

      </div>

    </footer>
  );
};

export default Footer;
