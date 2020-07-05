import React, { useState } from "react";

//Styling
import { ListWrapper } from "../styles";

//Components
import CardItem from "./CardItem";

//Data
import cards from "../cards";

const CardList = () => {
  const [_cards, setCards] = useState(cards);

  const updateCard = (flippedCardID) => {
    const findCard = _cards.find((cards) => cards.id === flippedCardID);
    findCard.flipped = !findCard.flipped;

    //   if (findCard.length === 2) {
    //     if (findCard[0].name === findCard[1].name) {
    //       setCards();
    //     }
    //   }
  };
  const shuffleCards = cards.sort((a, b) => {
    return 0.5 - Math.random();
  });

  const cardList = shuffleCards.map((card) => (
    <CardItem card={card} updateCard={updateCard} />
  ));

  return (
    <ListWrapper className="container">
      <div className="row">{cardList}</div>
    </ListWrapper>
  );
};

export default CardList;
