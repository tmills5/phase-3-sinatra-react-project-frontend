import React, { useState, useEffect } from "react";
// import AddForm from "./AddForm";
import NewCocktail from "./NewCocktail";
import CocktailList from "./CocktailList";





const CocktailsPage = ( {reviews} ) => {
    const [cocktails, setCocktails] = useState([]);

    //Get all cocktails

    useEffect(() => {
        fetch("http://localhost:9292/cocktails")
          .then((resp) => resp.json())
          .then((cocktails) => setCocktails(cocktails));
      }, []);
    

    
      function handleUpdateCocktail(updatedCocktail) {
        const updatedCocktails = cocktails.map((cocktail) => {
          if (cocktail.id === updatedCocktail.id) {
            return updatedCocktail;
          } else {
            return cocktail;
          }
        });
        setCocktails(updatedCocktails);
      }
    
      const deleteCocktail = (id) => {
        const updatedCocktails = cocktails.filter((cocktail) => cocktail.id !== id);
        setCocktails(updatedCocktails);
      };


    return(
        <div className="App">
            <NewCocktail reviews={reviews} cocktails={cocktails} setCocktails={setCocktails}/>
            <CocktailList
                cocktails={cocktails}
                deleteCocktail={deleteCocktail}
                onUpdateCocktail={handleUpdateCocktail}
            />
            
     

            {/* <AddForm cocktails={cocktails} setCocktails={setCocktails} /> */}

            {/* <CocktailList cocktails={cocktails} setCocktails={setCocktails} reviews={reviews}/>

            <Routes>
                <Route path={"/:id"} element={<CocktailCard cocktails={cocktails}/>} />
            </Routes>
            
             */}
  
        </div>
        
    )
}

export default CocktailsPage;