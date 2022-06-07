import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";
import AddCocktail from "./components/AddCocktail";
import MyCocktails from "./components/MyCocktails";
// import Footer from "./components/Footer";







const App = () => {
  const [cocktails, setCocktails] = useState([]);
  // const [reviews, setReviews] = useState([]);
  // const [users, setUsers] = useState([]);

  
useEffect(() => {
  
//get all cocktails to start--------------------

  fetch('http://localhost:9292/cocktails')
    .then(response => response.json())
    .then(cocktailsData => { //console.log(cocktailsData)
      setCocktails(cocktailsData)
    })

//get all reviews------------------------

  // fetch('http://localhost:9292/reviews')
  //   .then(response => response.json())
  //   .then(reviewsData => {  //console.log(reviewsData)
  //     setReviews(reviewsData)
  //   })

//get all users-----------------

  // fetch('http://localhost:9292/users')
  //   .then(response => response.json())
  //   .then(usersData => {  //console.log(usersData)
  //     setUsers(usersData)
  //   })

}, [])

//console.log(cocktails)
//console.log(reviews)
//console.log(users)

//Delete Cocktail Card------------------

  function deleteCocktailCard(id) {
    fetch(`http://localhost:9292/cocktails/${id}`, {
      method: "DELETE",
      headers: {'Accept': 'application/json'}
    })
    .then(()=> {
      let updatedCocktailsArray = cocktails.filter(cocktail => cocktail.id !== id)
      setCocktails(updatedCocktailsArray)
    })
  };






  return (
    <>
      <Router>
        <NavBar />

        <Routes>
            <Route path='/' element={ <MainContainer cocktails={cocktails} deleteCocktailCard={deleteCocktailCard} /> } />
            <Route path='/add' element={ <AddCocktail cocktails={cocktails} setCocktails={setCocktails} /> } />
            <Route path='/mycocktails' element={ <MyCocktails />} />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
