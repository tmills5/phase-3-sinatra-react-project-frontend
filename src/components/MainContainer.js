import React from 'react';
import CocktailCard from './CocktailCard';
import { Container, Row, Col} from 'react-bootstrap';
import AddForm from './AddForm';



const MainContainer = ( {cocktails, setCocktails, deleteCocktailCard, reviews} ) => {
//console.log(reviews)

  return(

    <Container fluid="md" className='card-container'>

      <AddForm cocktails={cocktails} setCocktails={setCocktails} />

      <Row md={5} >
        

        {cocktails.map(cocktail=> {

        {reviews.map(review=> (
          review.cocktail_id === cocktail.cocktail_id
        ))}

   
          return(
            <Col key={cocktail.id}>
              <CocktailCard  
                cocktail={cocktail} 
                deleteCocktailCard={deleteCocktailCard}  
                review={review}
                />
            </Col>)
          })}
      </Row>
      
</Container>
  )
};

export default MainContainer;