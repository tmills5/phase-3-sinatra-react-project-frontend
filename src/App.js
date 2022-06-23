import React, { useEffect, useState } from "react";
import './App.css';

import CocktailsPage from "./components/CocktailsPage";



const App = () => {
  // const [cocktails, setCocktails] = useState([]); 
  const [reviews, setReviews] = useState([]);


useEffect(() => {
  
//get all reviews------------------------

  fetch('http://localhost:9292/reviews')
    .then(response => response.json())
    .then(reviewsData => {  //console.log(reviewsData)
      setReviews(reviewsData)
      //console.log(reviewsData)
    })

}, [])


//console.log(reviews)


  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Cocktail Companion</h1>
      <CocktailsPage reviews={reviews} />
    </div>
  );
}

export default App;
