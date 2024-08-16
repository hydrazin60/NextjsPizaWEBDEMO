import React from "react";
import Image from "next/image";
function Card() {
  const priceOptions = ["regulae", "medium", "large"];
  return (
    <div className="box">
      <div className="w-80 rounded-lg bg-white overflow-hidden  dark:bg-black border-gradient">
        <div className="relative w-full h-80">
          <Image
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pizza"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <div lassName="font-bold mb-2 text-xl uppercase"> {"pizza"}</div>
          <p className=" short_description text-gray-700 dark:text-gray-400 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum
            harum pariatur rem obcaecati nisi quam, vitae vero fugit minima ipsa
            natus omnis magnam. Sit corporis commodi suscipit deleniti
            obcaecati.
          </p>
        </div>
        <div className="flex px-4 justify-between">
          <select className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded">
            {priceOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex p-4 font-bold  justify-between">
          <button className="border dark:border-gray-400 text-black dark:text-white border-gray-900 rounded p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100 ">
            Add to cart
          </button>
          <p className="p-2 text-xl text-black dark:text-white">₹2020/-</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
