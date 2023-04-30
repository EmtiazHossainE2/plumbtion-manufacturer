import React from "react";
import cardBg from "./duetFrontBg.jpg";

export default function FinalCardFront({ genCard }) {
  const { name } = genCard;

  
  return (
    <div className="flex flex-col justify-center items-center py-12 overflow-x-hidden">
      <div className="card w-[385px] bg-base-100 rounded-none border-2">
        <div>
          <figure>
            <img src={cardBg} alt="" className="relative" />
          </figure>

          <div className="w-full absolute top-[19.5rem]">
            <h1 className="text-[19px] font-bold text-center capitalize select-none ml-[6.1rem] pb-3">
              {name || "Emtiaz E"}
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  );
}
