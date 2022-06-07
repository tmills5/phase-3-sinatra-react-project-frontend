import React from 'react';
import CocktailCard from './CocktailCard';
import { Container, Row, Col} from 'react-bootstrap';
import AddForm from './AddForm';



const MainContainer = ( {cocktails, setCocktails, deleteCocktailCard} ) => {


  return(

    <Container fluid="md" className='card-container'>

      <AddForm cocktails={cocktails} setCocktails={setCocktails} />

      <Row md={5} >
        {cocktails.map(cocktail=> {
          return(
            <Col key={cocktail.id}>
              <CocktailCard  cocktail={cocktail} deleteCocktailCard={deleteCocktailCard}  />
            </Col>)
          })}
      </Row>
      
</Container>
  )
};

export default MainContainer;