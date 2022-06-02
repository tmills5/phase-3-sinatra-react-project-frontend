import React, { useEffect, useState } from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";




const App = () => {
  const [cocktails, setCocktails] = useState([]);
  // const [reviews, setReviews] = useState([]);


  // get all cocktails to start
useEffect( () => {
  fetch("http://localhost:9292/cocktails")
    .then(response => response.json())
    .then(cocktailsData => {
      console.log(cocktailsData)
    })
}, [])

   
  

console.log(cocktails)


  return (

    <>
      <Header />
      <MainContainer cocktails={cocktails} />
    </>
  );
}

export default App;
