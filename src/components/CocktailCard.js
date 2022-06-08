import React, { useState } from 'react';
import { Card, Button } from "react-bootstrap";


const CocktailCard = ( {cocktail, deleteCocktailCard, getIndividualCocktailReviews} ) => {
  const { id, cocktail_name, category, image, glass} = cocktail;
  // const [showReviews, setShowReviews] = useState(false);

  

  return(

<Card className='card' style={{ width: "10rem" }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{cocktail_name}</Card.Title>
    <Card.Text>
      Category: {category} 
    </Card.Text>
    <Card.Text>
      Glass: {glass}
    </Card.Text>
    <Button variant="danger" className='card-button' onClick={()=>deleteCocktailCard(id)}>Delete</Button>
    <Button>Reviews</Button>
  </Card.Body>

  
</Card>
  )
};



export default CocktailCard;