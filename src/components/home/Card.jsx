// import React, { useState } from "react";
// import Image from "next/image";

// function Card({ cardData }) {
//   const priceOptions = Object.keys(cardData.price);
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState(priceOptions[0]);

//   handlequentity = (e) => {
//     setQty(e.target.value);
//   };
//   handleSize = (e) => {
//     setSize(e.target.value);
//   };
//   let finalPrice = qty * parseInt(cardData.price[size]);
//   return (
//     <div className="flex justify-center overflow-x-scroll">
//       <div className="box">
//         <div className="w-80 rounded-lg bg-white overflow-hidden dark:bg-black border-gradient">
//           <div className="relative w-full h-80">
//             <Image
//               src={cardData.img} // Use the image URL from the data
//               alt={cardData.name} // Use the name as alt text
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           <div className="p-4">
//             <div className="font-bold mb-2 text-xl uppercase">
//               {cardData.name} {/* Display the name */}
//             </div>
//             <p className="short_description text-gray-700 dark:text-gray-400 text-base">
//               {cardData.description} {/* Display the description */}
//             </p>
//           </div>
//           <div className="flex px-4 justify-between">
//             <select
//               className="h-100 p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300 border border-black dark:border-gray-400 rounded"
//               onChange={handlequentity}
//             >
//               {Array.from(Array(6), (e, i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1}
//                 </option>
//               ))}
//             </select>

//             <select
//               className="h-100 p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300 border border-black dark:border-gray-400 rounded"
//               onChange={handleSize}
//             >
//               {priceOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="flex p-4 font-bold justify-between">
//             <button className="border dark:border-gray-400 text-black dark:text-white border-gray-900 rounded p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-100">
//               Add to cart
//             </button>
//             <p className="p-2 text-xl text-black dark:text-white">
//               ₹ {finalPrice}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Card;

import React, { useState } from "react";
import Image from "next/image";

function Card({ cardData }) {
  const priceOptions = Object.keys(cardData.price);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0]);

  const handleQuantity = (e) => {
    setQty(e.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  let finalPrice = qty * parseInt(cardData.price[size]);

  return (
    <div className="flex justify-center overflow-x-scroll">
      <div className="box">
        <div className="w-80 rounded-lg bg-white overflow-hidden dark:bg-black border-gradient">
          <div className="relative w-full h-80">
            <Image
              src={cardData.img} // Use the image URL from the data
              alt={cardData.name} // Use the name as alt text
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <div className="font-bold mb-2 text-xl uppercase">
              {cardData.name} {/* Display the name */}
            </div>
            <p className="short_description text-gray-700 dark:text-gray-400 text-base">
              {cardData.description} {/* Display the description */}
            </p>
          </div>
          <div className="flex px-4 justify-between">
            <select
              className="h-100 p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300 border border-black dark:border-gray-400 rounded"
              onChange={handleQuantity}
            >
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            <select
              className="h-100 p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300 border border-black dark:border-gray-400 rounded"
              onChange={handleSize}
            >
              {priceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex p-4 font-bold justify-between">
            <button className="border dark:border-gray-400 text-black dark:text-white border-gray-900 rounded p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-100">
              Add to cart
            </button>
            <p className="p-2 text-xl text-black dark:text-white">
              ₹{finalPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
