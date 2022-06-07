import React from 'react';
import { Card, Button } from "react-bootstrap";
// import EditCocktail from './EditCocktail';


const CocktailCard = ( {cocktail, deleteCocktailCard } ) => {
  const { id, name, category, image, glass} = cocktail;


  return(

    <Card className='card' style={{ width: "10rem" }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      Category: {category} 
    </Card.Text>
    <Card.Text>
      Glass: {glass}
    </Card.Text>
    <Button variant="primary" className='card-button'>Reviews</Button>
    <Button variant="danger" className='card-button' onClick={()=>deleteCocktailCard(id)}>Delete</Button>
    {/* <Button variant="warning" className='card-button' onClick={toEditPage}>Edit</Button> */}
  </Card.Body>
</Card>
  )
};



export default CocktailCard;