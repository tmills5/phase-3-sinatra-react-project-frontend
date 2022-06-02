import React from 'react';
import CocktailCard from './CocktailCard';
import { Container, Row, Col} from 'react-bootstrap'



const MainContainer = ({cocktails}) => {


  return(

    <Container fluid="md" className='card-container'>
      <Row md={4} >
        {cocktails.map(cocktail=> {
          return(
            <Col key={cocktail.id}>
              <CocktailCard  cocktail={cocktail} />
            </Col>)
          })}
      </Row>
</Container>
  )
};

export default MainContainer;