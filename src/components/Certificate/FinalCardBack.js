import React from "react";
import cardBg from "./duetBackBg.jpg";


export default function FinalCardBack({ genCard }) {
  const { idNo, bloodGroup, nationalIdNo, signature } = genCard;
  return (
    <div className="flex flex-col justify-center items-center pb-12 md:py-12 overflow-x-hidden">
      <div className="card w-[385px] bg-base-100 rounded-none border-2">
        <div>
          <figure>
            <img src={cardBg} alt="" className="relative" />
          </figure>
          <div className="w-full absolute left-4 top-3">
            <h1 className="text-[18px] font-bold capitalize select-none">
              Blood Group: {bloodGroup || "B+"}
            </h1>
            <h1 className="text-[18px] font-bold capitalize select-none">
              National ID: {nationalIdNo || "19960911814110159"}
            </h1>
          </div>
          <div className="w-full flex absolute left-9 top-[9rem]">
            <h1 className="text-3xl font-theSignature select-none ml-3 text-black -rotate-3">
              {signature || "toufiq hasan"}
            </h1>
          </div>
          <div className="w-full flex justify-end items-center absolute right-9 top-[7.2rem] font-black">
            <h1 className="text-[10px] font-signaturex select-none text-black mr-2 rotate-6">
              Kazi Zakir
            </h1>
          </div>
          <h1 className="absolute bottom-0 right-[10rem] text-[19px] font-bold select-none">
            {idNo || "416020"}
          </h1>
        </div>
      </div>
    </div>
  );
}
