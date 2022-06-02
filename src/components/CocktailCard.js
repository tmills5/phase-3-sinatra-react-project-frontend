import React from 'react';
import { Card, Button } from "react-bootstrap";


const CocktailCard = ( {cocktail} ) => {
  const {name, category, image, glass} = cocktail;


  return(

    <Card style={{ width: "15rem" }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {category} {glass}
    </Card.Text>
    <Card.Text>
      Reviews
    </Card.Text>
    <Button variant="primary">Like</Button>
  </Card.Body>
</Card>
  )
};



export default CocktailCard;