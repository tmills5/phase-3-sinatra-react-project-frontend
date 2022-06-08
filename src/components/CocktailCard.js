import React from 'react';
import { Card, Button } from "react-bootstrap";


const CocktailCard = ( {cocktail, deleteCocktailCard, users } ) => {
  const { id, name, category, image, glass} = cocktail;
// console.log(users)

// const {user_name} = user


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
      {/* {cocktail.id.reviews} */}
    <Button variant="danger" className='card-button' onClick={()=>deleteCocktailCard(id)}>Delete</Button>
  </Card.Body>
</Card>
  )
};



export default CocktailCard;