import React from 'react';
import CocktailCard from './CocktailCard';
// import CocktailCard from './CocktailCard';
// import { Container, Row, Col} from 'react-bootstrap';
// import AddForm from './AddForm';

// import EditCocktailForm from './EditCocktailForm';


const CocktailList = ( {cocktails, deleteCocktail, onUpdateCocktail} ) => {
  


//console.log(eachReview)
  // const renderCocktails = cocktails.map(cocktail => {
  //   const {id, cocktail_name} = cocktail;
  //   return(
  //     <>
  //     <li key={id}>
  //       <Link to={`/cocktails/${id}`}>{cocktail_name}</Link>
  //     </li>

        
  //     </>
      
  //   )
    
  // })


  return(

    <div>
      <h2>-Your Drinks-</h2>
      {cocktails.map(cocktail => (
        <CocktailCard 
          key={cocktail.id}
          cocktail={cocktail}
          deleteCocktail={deleteCocktail}
          onUpdateCocktail={onUpdateCocktail}
        />
      ))}
    </div>

    // <Container fluid="md" className='card-container'>

    //   <Row md={5} >

    //     {cocktails.map(cocktail => {
    //       let eachReview = reviews.filter(review => {
    //         if (review.cocktail_id === cocktail.id) {
    //         return review
    //       } return "" 
    //       })

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