import React, { useState } from "react";

//Styling
import { CardWrapper } from "../styles";

const CardItem = (props) => {
  const jokerImg =
    "https://images-na.ssl-images-amazon.com/images/I/71DkRjMsbyL._AC_SL1500_.jpg";
  const card = props.card;

  const [_card, setCard] = useState(jokerImg);

  const handleClick = () => {
    props.updateCard(card.id);
    _card === jokerImg ? setCard(card.image) : setCard(jokerImg); //passed id to card/ call method here
  };

  return (
    <CardWrapper className="col-3">
      <img
        alt={card.name}
        src={!card.flipped ? jokerImg : card.image}
        onClick={handleClick}
      />
    </CardWrapper>
  );
};

export default CardItem;
