/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "./Cart";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

const Home = () => {
  const [allCards, setAllCards] = useState([]);
  const [selectCard, setSelectCard] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCards(data));
  }, []);

 
  const [totalCredit, setTotalCredit] = useState(0);
  const handleSelectCard = (card) => {
    const isExist = selectCard.find((item) => item.id === card.id);
  
    if (isExist) {
      Swal.fire({
        title: 'Your can not add multiple times ',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'cancel'
      })
 
    } else {
      setSelectCard([...selectCard, card]);
      const cardCredit = parseFloat(card.Credit);
      setTotalCredit(totalCredit + cardCredit); // Add the card's Credit to totalCredit

      
    }
  };

  return (
    <div className="">
      <div className=" flex gap-2 flex-col md:flex-row ">
       
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-center lg:grid-cols-4 gap-4">
  {allCards.map((card) => (
    <div
      key={card.id}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg"
    >
      <img
        className="w-full h-32 object-cover"
        src={card.Cover}
        alt={card.Title}
      />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2">{card.Title}</div>
        <p className="text-gray-700 text-base">{card.Description}</p>
          <div>
            cardCredit: 
            {card.Credit}
          </div>
        <div className="mt-2 flex justify-between items-center">
          <div className="text-gray-900 font-bold text-lg">
            $ {card.Price}
          </div>
          <button
            onClick={() => handleSelectCard(card)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

        <div className="">
          <Cart totalCredit={totalCredit} selectCard={selectCard}></Cart>
          {totalCredit <= 20 ? (
    <p className="relative top-[-50px]">total credit {totalCredit}</p>
  ) : (

 alert('you can not add more then 20')
 
  )}

        </div>
      </div>
    </div>
  );
};

export default Home;
