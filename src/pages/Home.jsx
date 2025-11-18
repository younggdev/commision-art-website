import React from "react";
import Decoration from "../components/Decoration";

function Home() {
  return (
    <section id="home" className="pt-20 sm:pt-0 pl-[90px]">
      <div className="mx-auto">
        <div className="flex flex-wrap h-screen">
          <Decoration />
          <div className="w-full self-center px-4 sm:px-10 sm:w-1/2">
            <h2 className="font-medium text-slate-70000 leading-relaxed">
              Hi 👋, welcome to My Portfolio
            </h2>
            <h1 className="font-bold text-slate-900 text-4xl mb-2 sm:text-5xl">
              Kai's Commision
            </h1>
            <p className="font-medium text-slate-70000 mb-10 leading-relaxed">
              I'm Kai and if you've innterest with my arts, you can check this
              portfolio ^^
            </p>
            <a
              href="/samples"
              className="text-base font-semibold text-white py-3 px-8 bg-gradient-to-tr from-[#f3d526] to-[#ceb000] rounded-full hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
            >
              Check It Out
            </a>
          </div>

          <div className="w-full self-end sm:w-1/2">
            <div className="mt-10 sm:mt-9 sm:right-0">
              <img
                src="img/hero1.png"
                alt="hero image"
                className="max-w-full mx-auto mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
