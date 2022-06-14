import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";
import EditCocktailForm from "./components/EditCocktailForm";


// import Footer from "./components/Footer";





const App = () => {
  const [cocktails, setCocktails] = useState([]);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  
useEffect(() => {
  
//get all cocktails to start--------------------

  fetch('http://localhost:9292/cocktails')
    .then(response => response.json())
    .then(cocktailsData => { //console.log(cocktailsData)
      setCocktails(cocktailsData)
    })

//get all reviews------------------------

  fetch('http://localhost:9292/reviews')
    .then(response => response.json())
    .then(reviewsData => {  //console.log(reviewsData)
      setReviews(reviewsData)
      //console.log(reviewsData)
    })

}, [])

//console.log(cocktails)
//console.log(reviews)


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
      
        <NavBar />

        <Routes>
            <Route 
            path='/' 
            element={ 
              <MainContainer 
                cocktails={cocktails} 
                setCocktails={setCocktails} 
                deleteCocktailCard={deleteCocktailCard}
                reviews={reviews}
                setReviews={setReviews}
                navigate={navigate}
                /> } />
            <Route path='/EditCocktailForm' element={ <EditCocktailForm cocktails={cocktails} setCocktails={setCocktails} navigate={navigate} />} />
        </Routes>

        {/* <Footer /> */}
      
    </>
  );
}

export default App;
