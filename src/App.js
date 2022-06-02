import React, { useEffect, useState } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";




const App = () => {
  const [cocktails, setCocktails] = useState([]);
  const [reviews, setReviews] = useState([]);


  
useEffect(() => {
  
  // get all cocktails to start

  fetch('http://localhost:9292/cocktails')
    .then(response => response.json())
    .then(cocktailsData => { //console.log(cocktailsData)
      setCocktails(cocktailsData)
    })

//get all reviews

    fetch('http://localhost:9292/reviews')
      .then(response => response.json())
      .then(reviewsData => {  //console.log(reviewsData)
      setReviews(reviewsData)
    })

//get all users

    fetch('http://localhost:9292/reviews')
      .then(response => response.json())
      .then(reviewsData => {  //console.log(reviewsData)
  setReviews(reviewsData)
})

}, [])

   
  

//console.log(cocktails)
//console.log(reviews)

  return (

    <>
      <Header />
      <MainContainer cocktails={cocktails} />
    </>
  );
}

export default App;
