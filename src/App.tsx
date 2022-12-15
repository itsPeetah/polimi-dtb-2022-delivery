import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-cyan-800 to-sky-300 | flex flex-col items-center justify-center p-4 | text-center text-white">
      <h2 className="text-lg font-mono">DTB '22 - Cluster 4, Circle 2</h2>
      <h1 className="text-4xl">ReHired Temporary Exhibition</h1>
      <p className="block sm:hidden text-amber-500 font-bold border-2 border-amber-500 rounded-lg my-4">
        If the page is not displaying correctly on mobile, please consider
        checking it out on your computer.
      </p>
      <iframe
        className=" shadow-2xl m-4"
        width="800"
        height="480"
        src="https://www.youtube.com/embed/c55Bhhm897Y"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <p>
        The final video is still unfortunately still rendering, but this iframe
        will be updated with its link as soon as it becomes available.
      </p>
    </div>
  );
}

export default App;
