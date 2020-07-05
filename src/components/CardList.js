import React, { useState, useEffect } from "react";

//Styling
import { ListWrapper, ResetButton, ResetWrapper } from "../styles";

//Components
import CardItem from "./CardItem";

//Data
import cards from "../cards";

const CardList = () => {
  const [_cards, setCards] = useState(cards);
  const [twoCards, setTwoCards] = useState([]);

  const updateCard = (flippedCardID) => {
    const findCard = _cards.find((cards) => cards.id === flippedCardID);
    findCard.flipped = !findCard.flipped;

    setTwoCards([...twoCards, findCard]);
    setCards([..._cards]);

    if (twoCards.length === 2) {
      if (twoCards[0].name === twoCards[1].name) {
        twoCards = [];
      } else {
        const findCard2 = _cards.find((card) => card.id === twoCards[0].id);

        setCards([..._cards]);
      }
    }
  };

  useEffect(() => {
    const shuffleCards = _cards.sort((a, b) => {
      return 0.5 - Math.random();
    });
    setCards(shuffleCards);
  }, []);

  // const handleReset = () => {};

  const cardList = _cards.map((card) => (
    <CardItem card={card} updateCard={updateCard} />
  ));

  return (
    <div>
      <ListWrapper className="container">
        <div className="row">{cardList}</div>
      </ListWrapper>
      <ResetWrapper>
        <ResetButton>Reset</ResetButton>
      </ResetWrapper>
    </div>
  );
};

export default CardList;
