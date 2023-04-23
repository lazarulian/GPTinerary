import React from "react";

const HeroBanner = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto px-4 pt-20 pb-10 lg:flex lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Plan Ahead
              <span className="sm:block"> & Travel Smarter </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Use GTP-4 to generate and customize your itinerary. Then use our
              platform to generate an ICS file with ease to upload to Google
              Calendar, Apple Calendar, or Outlook.
            </p>

            {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:scale-105 duration-300 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/create-itinerary"
              >
                Try it Out
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
