// import Card from "@/components/home/Card";
// import CarouselComponent from "@/components/home/Carousel";
// import { Inter } from "next/font/google";
// import cardData from "../store/cardData.json";
// import { useEffect } from "react";
// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   let categories = new Set();
//   const foodData = [];
//   const handleData = () => {
//     cardData.map((data) => {
//       return foodData.push(data), categories.add(data.category);
//     });
//   };
//   useEffect(() => {
//     handleData();
//   }, []);
//   const categoryArray = [...categories];
//   return (
//     <>
//       <CarouselComponent />
//       {categoryArray.map((category) => {
//         return (
//           <>
//             <div
//               key={category}
//               className="text-4xl mt-10 mb-3 uppercase font-bold"
//             >
//               {category}
//             </div>
//             <hr />
//             <div className="flex flex-col items-center justify-center">
//               <div className="grid mx-auto grid-cols-1 md:grid-cols-1 md:gridcols-3">
//                 {foodData
//                   .filter((foodData) => foodData.category === category)
//                   .map((data) => {
//                     return <Card key={data.id} cardData={data} />;
//                   })}
//               </div>
//             </div>
//           </>
//         );
//       })}
//       <Card />
//     </>
//   );
// }

import Card from "@/components/home/Card";
import CarouselComponent from "@/components/home/Carousel";
import { Inter } from "next/font/google";
import cardData from "../store/cardData.json";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [categories, setCategories] = useState(new Set());
  const [foodData, setFoodData] = useState([]);

  const handleData = () => {
    const tempCategories = new Set();
    const tempFoodData = [];

    cardData.map((data) => {
      tempFoodData.push(data);
      tempCategories.add(data.category);
    });

    setCategories(tempCategories);
    setFoodData(tempFoodData);
  };

  useEffect(() => {
    handleData();
  }, []);

  const categoryArray = [...categories];

  return (
    <>
      <CarouselComponent />
      {categoryArray.map((category) => (
        <div key={category}>
          <div className="text-4xl mt-10 mb-3 uppercase font-bold">
            {category}
          </div>
          <hr />
          <div className="flex flex-col items-center justify-center">
            <div className="grid mx-auto grid-cols-1 md:grid-cols-1 md:grid-cols-3">
              {foodData
                .filter((data) => data.category === category)
                .map((data) => (
                  <Card key={data.id} cardData={data} />
                ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
