import React from "react";
import NewCocktail from "./NewCocktail";
import CocktailList from "./CocktailList";


const CocktailsPage = ( {cocktails, setCocktails, reviews, setReviews} ) => {

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
          <NewCocktail cocktails={cocktails} setCocktails={setCocktails} />
            <CocktailList
                cocktails={cocktails}
                reviews={reviews}
                setReviews={setReviews}
                deleteCocktail={deleteCocktail}
                onUpdateCocktail={handleUpdateCocktail}
            />
        </div>
        
    )
}

export default CocktailsPage;