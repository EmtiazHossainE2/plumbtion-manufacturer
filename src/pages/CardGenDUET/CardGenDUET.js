import React, { useRef } from 'react'
import CardForm from '../../components/Certificate/CardForm';

const CardGenDUET = () => {
  const finalCard = useRef(null);
  return (
    <>
      <CardForm finalCard={finalCard} />
    </>
  );
}

export default CardGenDUET