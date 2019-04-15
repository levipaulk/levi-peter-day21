import React from 'react';
import Card from './Card';


function List (props) {
    const allCards = props.store.allCards;
    const cardID = props.store.lists[0].cardIds.toString();
    const list = props.store.lists.map( list => 
        <section id="list.id" className="List">
         <header className="List-header">
             <h2>{list.header}</h2>
        </header>

        <div className="List-cards">
            <p>{cardID} 
            {allCards.a.title}
            </p>
            <Card title={allCards.a.title} content={allCards.a.content} />
        </div>
            
      </section>
        );

    return (
      list
        );
}


export default List;