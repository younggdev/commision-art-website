import React from "react";
import Decoration from "../components/Decoration";
import PriceCard from "../components/PriceCard";

function Prices() {
  return (
    <section className="p-2 pl-[70px]">
      <div className="mt-20">
        <Decoration />
        <h1 className="text-center font-bold text-slate-900 lg:text-3xl text-2xl mb-5">
          Prices
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 px-3 mb-10">
          <PriceCard
            title={"Headshot"}
            price={40}
            desc={
              "Sudah bisa mendapatkan art headshot ala style-nya Kai (harga komersial 2x lipat)"
            }
            accent={"93ffff"}
          />
          <PriceCard
            title={"Bust Up"}
            price={50}
            desc={
              "Sudah bisa mendapatkan art bust up ala style-nya Kai (harga komersial 2x lipat)"
            }
            accent={"94ffb9"}
          />
          <PriceCard
            title={"Halfbody"}
            price={65}
            desc={
              "Sudah bisa mendapatkan art halfbody ala style-nya Kai (harga komersial 2x lipat)"
            }
            accent={"ffff93"}
          />
          <PriceCard
            title={"Knee Up"}
            price={70}
            desc={
              "Sudah bisa mendapatkan art knee up ala style-nya Kai (harga komersial 2x lipat)"
            }
            accent={"ffdb94"}
          />
          <PriceCard
            title={"Fullbody"}
            price={85}
            desc={
              " Sudah bisa mendapatkan art fullbody ala style-nya Kai (harga komersial 2x lipat)"
            }
            accent={"fe9494"}
          />
        </div>

        <img
          src="img/info.png"
          alt="information logo"
          className="mx-auto w-10 my-1"
        />
        <h2 class="text-center lg:text-lg text-base font-bold mb-5">
          Harga per chara yaa~~~
        </h2>
      </div>
    </section>
  );
}

export default Prices;
