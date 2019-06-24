import React from 'react';
import Card from './Card';
import STORE from './store';
export default function List(props){
  let listOfCards = props.cards.map((card, index)=>{
    return STORE.allCards[card];
  });
  let cards = listOfCards.map(card=>{
    return(<Card key={card.id} title = {card.title} content={card.content}/>);
  });
  return(
    <div>
      <header>{props.header}</header>
      <div className = 'List-cards'>
        {cards}    

      </div>


    </div>
  );
}