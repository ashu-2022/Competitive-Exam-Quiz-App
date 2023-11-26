import { useState } from "react";
import OverallAnalysis from "./components/OverallAnalysis";
import SolutionReport from "./components/SolutionReport";

const tabs = [
  { name: "OVERALL ANALYSIS" },
  { name: "SOLUTION REPORT" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Result() {
  const [currentView, setCurrentView] = useState("OVERALL ANALYSIS");


  return (
      <>
      <div className="bg-white m-2 p-2 sm:m-5 sm:p-5 border-2">
        <h1 className="font-semibold leading-6 text-2xl my-3 ">
          Your Test Summary
              </h1>
              <div className="h-[0.5px] w-full bg-gray-300 my-3"></div>

        
        <div>
          <span className="isolate inline-flex flex-wrap rounded-md shadow-sm mb-5">
            {tabs?.map((tabItem, index) => (
              <button
                    type="button"
                    key={index}
                onClick={(e) => setCurrentView(tabItem.name)}
                className={classNames(
                  "relative inline-flex items-center bg-white px-3 py-2 text-lg font-semibold  ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10",
                  index === 0 ? "rounded-l-md" : "rounded-r-md",
                  currentView === tabItem.name
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-900"
                )}
              >
                {tabItem.name}
              </button>
            ))}
          </span>
                  <div className="viewArea">
                      {
                          currentView==='OVERALL ANALYSIS'?<OverallAnalysis/>:<SolutionReport/>
                      }
          </div>
        </div>
      </div>
    </>
  );
}
