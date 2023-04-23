import React from "react";

const Questions = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white ">
        <div className="px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-8 ">
          <div className="text-center ">
            <h2 className="text-3xl font-bold sm:text-4xl ">Instructions</h2>
            <br></br>
          </div>
        </div>
      </section>
      <div className="space-y-4">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-800">
            <h2 className="font-medium text-white">
              How do I generate the Itinerary?
            </h2>
            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-white">
            Remember to structure the travel like: Date (Month/Day/Year): Start
            Time - End Time • Short Title • Description of Event
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-800">
            <h2 className="font-medium text-white">
              Is your itinerary not generating properly?
            </h2>

            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 mt-4 leading-relaxed text-white">
            Check if you are using military time or any different formatting
            styles. Check the readme on the github for an example of a working
            template.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Questions;
