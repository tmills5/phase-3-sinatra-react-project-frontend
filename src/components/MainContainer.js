import React from 'react';
import CocktailCard from './CocktailCard';
import { Container, Row, Col} from 'react-bootstrap'



const MainContainer = ( {cocktails, deleteCocktailCard} ) => {


  return(

    <Container fluid="md" className='card-container'>
      <Row md={5} >
        {cocktails.map(cocktail=> {
          return(
            <Col key={cocktail.id}>
              <CocktailCard  cocktail={cocktail} deleteCocktailCard={deleteCocktailCard} />
            </Col>)
          })}
      </Row>
</Container>
  )
};

export default MainContainer;