import React from "react";
import HeroBanner from "./HeroBanner";
import Special from "./Special";

const Hero = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-5xl flex flex-col projects-center md:projects-start md:justify-center">
        <HeroBanner />
        <a
          className={`w-full relative rounded-xl border-fun-gray border p-2 transition duration-500 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
        >
          <img
            className="w-full rounded-md"
            src="/static/images/Home/HomeSplash.png"
          />
        </a>
        <Special />
      </div>
    </div>
  );
};

export default Hero;
