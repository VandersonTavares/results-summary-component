import { useState } from "react";

import jsonData from "./data.json";

import { Weights } from "./components/Weights";


function App() {
  const [data] = useState(jsonData);

  return (
    <div className="containers max-w-6xl mx-auto md:h-screen md:flex md:items-center md:justify-center">
      <div className="md:flex items-center justify-center shadow-xl rounded-[35px]">
        <div className="card-top bg-gradient-to-b from-[#5f3ffc] to-[#3930ed] h-[350px] md:h-[450px] md:w-[330px] rounded rounded-b-[35px] md:rounded-[35px] ">
          <div className="flex flex-col items-center">
            <h1 className="m-5 font-bold text-lg text-[#c9b9fd]">
              Your Result
            </h1>
            <div className="circle rounded-full bg-gradient-to-tr from-[#6247eb] to-[#2a239e] w-36 h-36 md:w-44 md:h-44 md:m-5 flex justify-center items-center">
              <div className="flex flex-col items-center">
                <span className="font-bold text-[50px] text-white">76</span>
                <span className="font-bold text-[#867cfd]">of 100</span>
              </div>
            </div>
            <h1 className="text-white m-3 text-2xl font-bold">Great</h1>
            <div className="text-center w-72 text-[#c9b9fd] md:w-52">
              <p className="font-semibold text-md">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
        </div>
        <div className="botton md:px-12 bg-white md:w-[330px] rounded-3xl pb-5">
          <div className="mx-7 mt-5 md:mx-0 md:mt-0 ">
            <h3 className="text-[#2a3040] font-bold text-lg">Summary</h3>
          </div>

          {data.map((item) => (
            <Weights
              key={item.category}
              category={item.category}
              score={item.score}
              icon={item.icon}/>
          ))}

          <div className="button mt-5 px-5 md:px-0">
            <button className="bg-[#303b59] text-white font-semibold rounded-full w-full h-16 md:h-12 text-xl mt-2">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
