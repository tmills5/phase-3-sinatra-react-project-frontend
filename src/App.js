import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import CocktailsPage from "./components/CocktailsPage";



const App = () => {
  const [ cocktails, setCocktails ] = useState([]); 
  const [ reviews, setReviews ] = useState([]);


useEffect(()=> {
  getCocktails();
  getReviews();
}, []);



// get all cocktails--------------------  
const getCocktails = () => {
  fetch("http://localhost:9292/cocktails")
    .then((resp) => resp.json())
    .then((cocktailsData) => {
      setCocktails(cocktailsData)});
};

  
//get all reviews------------------------
const getReviews = () => {
  fetch('http://localhost:9292/reviews')
    .then(response => response.json())
    .then(reviewsData => {
      setReviews(reviewsData)});
};

  //console.log(cocktails)
  //console.log(reviews)


  return (
    <div className="App">
      <Header />
      <CocktailsPage 
        cocktails={cocktails}
        setCocktails={setCocktails}
        reviews={reviews}
        setReviews={setReviews}
        />
    </div>
  );
}

export default App;