import React from "react";

export const Navbar2 = () => {

  const scrollToSentiments = () => {
    const sentimentsElement = document.getElementById("sentiments"); // Get the Sentiments component element by its id
    if (sentimentsElement) {
      sentimentsElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the Sentiments component with smooth behavior
    }
  };

  const scrollToTeam = () => {
    const sentimentsElement = document.getElementById("team"); // Get the Sentiments component element by its id
    if (sentimentsElement) {
      sentimentsElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the Sentiments component with smooth behavior
    }
  };

  const scrollToTochenomics = () => {
    const sentimentsElement = document.getElementById("tochenomics"); // Get the Sentiments component element by its id
    if (sentimentsElement) {
      sentimentsElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the Sentiments component with smooth behavior
    }
  };

  const scrollToAlsoLike = () => {
    const sentimentsElement = document.getElementById("alsolike"); // Get the Sentiments component element by its id
    if (sentimentsElement) {
      sentimentsElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the Sentiments component with smooth behavior
    }
  };

  const scrollToAbout = () => {
    const sentimentsElement = document.getElementById("about"); // Get the Sentiments component element by its id
    if (sentimentsElement) {
      sentimentsElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the Sentiments component with smooth behavior
    }
  };

  const scrollToPerformance = () => {
    const sentimentsElement = document.getElementById("performance"); // Get the Sentiments component element by its id
    if (sentimentsElement) {
      sentimentsElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the Sentiments component with smooth behavior
    }
  };

  const scrollToBitCoin = () => {
    const sentimentsElement = document.getElementById("bitcoin"); // Get the Sentiments component element by its id
    if (sentimentsElement) {
      sentimentsElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the Sentiments component with smooth behavior
    }
  };

  return (

    <nav className="flex flex-row justify-center w-full">
      <div className="h-[70px] w-full relative">
        
        <div className="flex flex-col items-start justify-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute"  >
          <div className="h-[48px] w-full border-blue_gray-100 border-b border-solid" />
          
        </div>
        <div className="flex flex-row justify-center w-max h-full gap-10 left-0 bottom-0 right-0 top-0 m-auto absolute">
        <button className="flex flex-row justify-start w-[16%] py-6 focus:outline-none hover:text-blue-800 hover:underline -ml-20" onClick={scrollToBitCoin}>
            Overview
          </button>
          <button className="flex flex-row justify-start w-[16%] py-6 focus:outline-none hover:text-blue-800 hover:underline" onClick={scrollToPerformance}>
            Performance
          </button>
          <button className="flex flex-row justify-start w-[25%] py-[23px] focus:outline-none hover:text-blue-800 hover:underline" onClick={scrollToAbout}>
            News Insights
          </button>
          <button className="flex flex-row justify-start w-[13%] py-6 focus:outline-none hover:text-blue-800 hover:underline" onClick={scrollToSentiments}>
            Sentiments
          </button>
          <button className="flex flex-col items-center justify-start w-[7%] py-6 focus:outline-none hover:text-blue-800 hover:underline" onClick={scrollToTeam}>
            Team
          </button>
          <button className="flex flex-row justify-start w-[13%] py-6 focus:outline-none hover:text-blue-800 hover:underline"  onClick={scrollToAlsoLike}>
            Trending
          </button>
          <button className="flex flex-row justify-start w-[14%] py-6 focus:outline-none hover:text-blue-800 hover:underline" onClick={scrollToTochenomics}>
            Tokenomics
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
