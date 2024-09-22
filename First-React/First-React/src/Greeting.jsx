// import { useState } from 'react'

// import './index.css'



function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

export function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing ListEN</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}

  export function Greeting(props) { 
    return <h1>{props.animals}</h1>;
  }
  
  export function Byeing(){
    // const animalss = ["Lion", "Cow", "Snake", "Lizard"];
    // const animals = animalss[1]
    
    return <Greeting animals={"1234 zee tokens"}/>
  }

  //props is there even if you don't 'declare' a property like in here '<Greeting animals={animals}/>,
  // it just doesnt have any properties, empty 'object', I think...