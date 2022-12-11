import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-sky-900 to-slate-600 | flex flex-col items-center justify-center text-white">
      <h2 className="text-lg font-mono">DTB '22 - Cluster 4, Circle 2</h2>
      <h1 className="text-4xl">ReHired Temporary Exhibition</h1>
      <iframe
        className=" shadow-2xl m-4"
        width="1120"
        height="630"
        src="https://www.youtube.com/embed/aqm001a07Lo"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default App;
