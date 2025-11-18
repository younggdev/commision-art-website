import React from "react";
import Decoration from "../components/Decoration";

function Terms() {
  return (
    <section id="home" className="pt-20 pl-[90px]">
      <div className="mx-auto">
        <h1 className="text-center font-bold text-slate-900 text-4xl mb-2 sm:text-5xl">
          Terms & Conditions
        </h1>
        <div className="flex flex-wrap">
          <Decoration />

          <div className="w-full self-center px-4 sm:px-10 py-5 sm:w-1/2">
            <div className="daftar pb-5">
              <h1 className="font-bold text-slate-900 text-2xl sm:text-3xl mb-2 border-b-2 border-slate-800 py-2 bg-gradient-to-tr from-amber-500 to-amber-400 px-4 rounded-full hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                T & C
              </h1>
              <ul className="list-disc pl-5 sm:pl-0">
                <li>
                  1 canvas max 4 chara pembuatan bisa 1 Minggu (bisa lebih
                  tergantung kesulitan)
                </li>
                <li>Bayar 50% setelah sketch disetujui</li>
                <li>Pastikan kirim referensi yang jelas</li>
                <li>Commercial use 2x lipat dari harga asli</li>
                <li>No refund</li>
                <li>Pembayaran bisa lewat Dana, dan OVO</li>
              </ul>
            </div>
            <div className="daftar pb-5">
              <h1 className="font-bold text-slate-900 text-2xl sm:text-3xl mb-2 border-b-2 border-slate-800 py-2 bg-gradient-to-tr from-amber-500 to-amber-400 px-4 rounded-full hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out">
                Don't
              </h1>
              <ul className="list-disc pl-5 sm:pl-0">
                <li>NSFW</li>
                <li>Mecha</li>
                <li>Furry</li>
                <li>Detail background</li>
                <li>Pose action</li>
                <li>Old man</li>
                <li>Realistic heavy armor</li>
              </ul>
            </div>
          </div>
          <div
            className="w-full sm:w-1/2 bg-no-repeat bg-contain bg-center"
            style={{ backgroundImage: "url('img/red-string.png')" }}
          >
            <div className="">
              <img src="img/hero2.png" alt="" className="mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terms;
