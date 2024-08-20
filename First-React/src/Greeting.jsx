// import { useState } from 'react'

// import './index.css'


  export function Greeting(props) {
    return <h1>{props.animals}</h1>;
  }
  
  export function Byeing(){
    const animalss = ["Lion", "Cow", "Snake", "Lizard"];
    const animals = animalss[1]
    return <Greeting animals={animals}/>
  }

  