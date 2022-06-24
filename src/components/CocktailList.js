import React from 'react';
import CocktailCard from './CocktailCard';



const CocktailList = ( {cocktails, deleteCocktail, onUpdateCocktail, reviews, setReviews} ) => {
  


  return(

    <div>
      <h2>-Your Drinks-</h2>
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



    // <Container fluid="md" className='card-container'>

    //   <Row md={5} >

        // {cocktails.map(cocktail => {
        //   let eachReview = reviews.filter(review => {
        //     if (review.cocktail_id === cocktail.id) {
        //     return review
        //   } return "" 
        //   })

    //       return(
    //         <Col key={cocktail.id}>
    //           <CocktailCard  
    //             cocktail={cocktail} 
    //             deleteCocktailCard={deleteCocktailCard}  
    //             eachReview={eachReview}
    //             />
    //         </Col>)
    //     })}

    //   </Row>
      
    // </Container>
  )
};

export default CocktailList;