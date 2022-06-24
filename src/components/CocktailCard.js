import React, { useState } from 'react';
import EditCocktailForm from './EditCocktailForm';



const CocktailCard = ( {cocktail, deleteCocktail, onUpdateCocktail} ) => {
  const {id, cocktail_name, image} = cocktail;
  const [isEditing, setIsEditing] = useState(false);

  const handleCocktailUpdate = (updatedCocktail) => {
    setIsEditing(false);
    onUpdateCocktail(updatedCocktail);
  };

  const handleDelete = () => {
    return(
      deleteCocktail(id),
    fetch(`http://localhost:9292/cocktails/${id}`, {
      method: "DELETE",
    })
    )
  }


//  console.log(eachReview)

//  let score = eachReview.map(obj=>{
//    return (
//      <div key={obj.id}>{obj.score} out of 10</div>
    
//    )
//  })

//  let comment = eachReview.map(obj=>{
//    return (
//     <li key={obj.id}>{obj.comment}</li>
//    )
//  })

  

  return( 
    <div>
      {isEditing ? (
        <EditCocktailForm
        cocktail={cocktail}
        onUpdateCocktail={handleCocktailUpdate}
      />
      ) : (
        <div>
            <img src={image || "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt="drink pic" /> - {cocktail_name}
            <button onClick={()=> setIsEditing((isEditing)=> !isEditing)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  )
};
//  <Card className='card' style={{ width: "10rem" }}>
//   <Card.Img variant="top" src={image} />
//   <Card.Body>
//     <Card.Title>{cocktail_name}</Card.Title>
//     <Card.Text>
//       Category: {category} 
//     </Card.Text>
//     <Card.Text>
//       Glass: {glass}
//     </Card.Text>
//       Recent Scores: {score}
//     <div>
//       Comments:
//       {comment}
//     </div>
//     <Button variant="danger" className='card-button' onClick={()=>deleteCocktailCard(id)}>Delete</Button>
//     <Link to={`/cocktails/${id}`}>EDIT</Link>
//     {/* <Button variant="warning" className='card-button' path={`/cocktails/${id}`}>Edit</Button> */}
    
//    </Card.Body>

//    {/* <EditCocktailForm /> */}
//  </Card>




export default CocktailCard;