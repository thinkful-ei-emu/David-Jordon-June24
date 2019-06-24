import React from "react";
import Card from "./Card";
import "./List.css";

export default function List(props) {
  let listOfCards = props.cards.map((card, index) => {
    return props.store[card];
  });
  let cards = listOfCards.map(card => {
    return <Card key={card.id} title={card.title} content={card.content} />;
  });
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">{cards}</div>
    </section>
  );
}
