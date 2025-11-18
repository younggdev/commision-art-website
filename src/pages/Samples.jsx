import React from "react";
import Decoration from "../components/Decoration";

function Samples() {
  return (
    <section class="p-2 pl-[90px] transition-fade">
      <div class="mt-20">
        <h1 class="text-center font-bold text-slate-900 lg:text-3xl text-2xl mb-5">
          Samples
        </h1>
        <Decoration />
        <div class="grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4 md:p-4">
          <div class="bg-blue-500 overflow-hidden rounded-lg group relative hover:scale-95 transition-all duration-500 aspect-[3/4]">
            <img
              class="h-full bg-cover absolute group-hover:scale-125 transition-all duration-500"
              src="img/s1.jpg"
            />
          </div>
          <div class="bg-blue-500 overflow-hidden rounded-lg aspect-[3/4] group relative">
            <img
              class="h-full bg-cover absolute group-hover:scale-125 transition-all duration-500"
              src="img/s2.jpg"
            />
          </div>
          <div class="bg-blue-500 overflow-hidden rounded-lg aspect-[3/4] group relative hover:scale-95 transition-all duration-500">
            <img
              class="h-full bg-cover absolute group-hover:scale-125 transition-all duration-500"
              src="img/s5.jpg"
            />
          </div>
          <div class="bg-blue-500 overflow-hidden rounded-lg aspect-[3/4] group relative hover:scale-95 transition-all duration-500">
            <img
              class="h-full bg-cover absolute group-hover:scale-125 transition-all duration-500"
              src="img/s6.jpg"
            />
          </div>
          <div class="bg-blue-500 overflow-hidden rounded-lg aspect-square group relative hover:scale-95 transition-all duration-500 md:col-start-2">
            <img
              class="h-full bg-cover absolute group-hover:scale-125 transition-all duration-500"
              src="img/s4.jpg"
            />
          </div>
          <div class="overflow-hidden rounded-lg aspect-[3/4] group relative hover:scale-95 transition-all duration-500 self-center">
            <img
              class="h-full bg-cover absolute group-hover:scale-125 transition-all duration-500 object-center"
              src="img/s7.jpg"
            />
          </div>
        </div>

        <div class="my-20">
          <h1 class="text-center font-bold text-slate-900 text-base lg:text-xl">
            Barangkali tertarik...
          </h1>
          <h2 class="text-center font-bold text-slate-900 mb-5 text-base lg:text-xl">
            Silahkan DM langsung
          </h2>

          <div class="flex justify-center mt-10">
            <a
              href=""
              class="w-16 group hover:scale-95 transition-all duration-200 text-center mx-5"
            >
              <img
                src="img/twitter.png"
                alt="twitter image"
                class="bg-[#f1f1f1] rounded-lg overflow-hidden p-5 transition-all duration-200 group-hover:scale-125 hover:shadow-md"
              />
            </a>
            <a
              href=""
              class="mx-5 w-16 group hover:scale-95 transition-all duration-200"
            >
              <img
                src="img/instagram.png"
                alt="instagram image"
                class="bg-[#f1f1f1] rounded-lg overflow-hidden p-5 transition-all duration-200 group-hover:scale-125 hover:shadow-md"
              />
            </a>
            <a
              href=""
              class="mx-5 w-16 group hover:scale-95 transition-all duration-200"
            >
              <img
                src="img/facebook-app-symbol.png"
                alt="facebook image"
                class="bg-[#f1f1f1] rounded-lg overflow-hidden p-5 transition-all duration-200 group-hover:scale-125 hover:shadow-md"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Samples;
