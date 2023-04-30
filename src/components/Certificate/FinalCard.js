import React from "react";
import FinalCardFront from "./FinalCardFront";


export default function FinalCard({ finalCard, genCard }) {
  return (
    <div
      ref={finalCard}
      className="flex flex-col md:flex-row justify-center items-center gap-2"
    >
      <FinalCardFront genCard={genCard} />
    </div>
  );
}
