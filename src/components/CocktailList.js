import React from 'react';
import CocktailCard from './CocktailCard';


const CocktailList = ( {cocktails, deleteCocktail, onUpdateCocktail, reviews, setReviews} ) => {
  

  return(
    <>
      <h2>-Your Drinks-</h2>
        <div className='card-parent'>
          {cocktails.map(cocktail => {
            let eachReview = reviews.filter(review => {
              if (review.cocktail_id === cocktail.id) {
              return review 
            } else return null
        })

        return(
          <CocktailCard 
          key={cocktail.id}
          cocktail={cocktail}
          deleteCocktail={deleteCocktail}
          onUpdateCocktail={onUpdateCocktail}
          eachReview={eachReview}
          reviews={reviews}
          setReviews={setReviews}
        />
        )
      })}
     </div>
    </>
  )
};

export default CocktailList;