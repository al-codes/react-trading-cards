"use strict"; //hash of all the trading card info
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.jpg'
  }
];
//abstract Trading card class defining properties of card
function TradingCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <img src={props.imgUrl} />
      <h2>Skill: {props.skill}</h2>
      
    </div>
  );
}




function TradingCardContainer() {
const tradingCards = [];

//for loop with key, value   Object.entries returns an array of objects own key value pairs
  for (const [i, currentCard] of Object.entries(tradingCardData)) {
    tradingCards.push(
      <TradingCard //Trading Card class defined with value name instead of props
        name={currentCard.name}
        skill={currentCard.skill}
        imageUrl={currentCard.imageUrl}
      />
    );
  }
//returns list that you just pushed all the trading cards into above
  return (
    <div>
      {tradingCards} 
    </div>
  );
}


ReactDOM.render( <TradingCardContainer />, //mount TradingCardContainer on element #container
  document.querySelector('#container'));


