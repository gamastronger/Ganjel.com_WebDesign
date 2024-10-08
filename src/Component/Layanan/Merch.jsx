const Merch = () => {
    return (
      <div className="relative bg-[#0F172A] flex flex-col 2xl:flex-row items-center justify-center text-white px-4 -mt-16 md:pt-16 2xl:-mt-56 2xl:px-24 mb-20 2xl:pb-10 overflow-hidden">
        {/* Right Section (Cards) */}
        <div className="2xl:flex 2xl:flex-row 2xl:space-x-8 w-full flex justify-center pt-20 pb-14 md:pb-12 md:pt-20 2xl:px-0 relative z-10 2xl:order-last">
          {/* Import Method Card with blue blur background */}
          <div className="absolute 2xl:static mt-24 md:mt-32 2xl:mt-44 w-48 h-32 md:w-[350px] md:h-[250px] 2xl:w-[320px] 2xl:h-[200px] bg-slate-300 rounded-lg shadow-lg opacity-70 transform rotate-[-5deg] hover:rotate-0 hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl">
            <div className="absolute inset-0 -z-10 bg-blue-400 opacity-60 blur-xl rounded-lg"></div>{" "}
            {/* Blue Blur */}
            <div className="h-full flex items-center justify-center text-lg md:text-xl font-semibold text-black">
              Import Method
            </div>
          </div>
          {/* Actions Card with blue blur background */}
          <div className="relative 2xl:mt-24 2xl:static w-48 h-32 md:w-[350px] md:h-[250px] 2xl:w-[320px] 2xl:h-[200px] bg-slate-300 rounded-lg shadow-lg opacity-90 transform rotate-[5deg] hover:rotate-0 hover:scale-110 transition-all duration-500 ease-in-out hover:shadow-2xl">
            <div className="absolute inset-0 -z-10 bg-blue-400 opacity-60 blur-xl rounded-lg"></div>{" "}
            {/* Blue Blur */}
            <div className="h-full flex items-center justify-center text-lg md:text-xl font-semibold text-black">
              Actions
            </div>
          </div>
        </div>
  
        {/* Text and Button Section */}
        <div className="md:text-left mt-20 md:mt-36 mx-2 md:mx-28 2xl:mx-0 text-[14px] md:text-xl 2xl:text-lg text-white relative z-10">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl 2xl:font-semibold transition-transform duration-500 hover:scale-105 hover:text-blue-400">
            Save time and money with our powerful tools
          </h2>
          <p className="text-gray-400 2xl:text-white mt-4 2xl:pt-4 2xl:pb-3">
            Create powerful websites effortlessly, whether youre working solo or
            collaborating with a team.
          </p>
          <button className="bg-[#6eacda] text-black font-medium border border-gray-700 hover:bg-blue-700 px-6 py-2 mt-4 rounded-lg transition-all duration-500 ease-in-out hover:text-white hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg">
            Pilih Desain
          </button>
        </div>
      </div>
    );
  };
  
  export default Merch;