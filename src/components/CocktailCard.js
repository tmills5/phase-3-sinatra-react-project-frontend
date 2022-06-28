
import React, { useState } from 'react';
import EditCocktailForm from './EditCocktailForm';
import {Button} from '@mui/material';




const CocktailCard = ( {cocktail, deleteCocktail, onUpdateCocktail, eachReview, setReviews, reviews} ) => {
  const {id, cocktail_name, image} = cocktail;
  const [isEditing, setIsEditing] = useState(false);
  const [newComment, setNewComment] = useState('');

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

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    let newReview = {
      comment: newComment
    }

    fetch(`http://localhost:9292/cocktails/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    },
    body: JSON.stringify(newReview)
    })
    .then(r=>r.json())
    .then(newReview => {
      setReviews([...reviews, newReview])
      setNewComment("")
    })
  };



 let comment = eachReview.map(obj=>{
   return (
    <li key={obj.id}>{obj.comment}</li>
   )
 })


  return( 


    <div className="card-container">
      {isEditing ? (
        <EditCocktailForm
        cocktail={cocktail}
        onUpdateCocktail={handleCocktailUpdate}
      />
      ) : (
        <div className='card'>
          
            <img 
            src={image || "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1600"} 
            alt="drink pic" 
            /> 

            <h1>{cocktail_name}</h1>
            <p className="comment">{comment}</p>
            <form  onSubmit={handleReviewSubmit}>
              <input
              className='review-input'
              type="text"
              placeholder="Add Review..." 
              value={newComment} 
              onChange={(e)=>setNewComment(e.target.value)}
              />
            </form>

            <hr/>

            <Button variant="contained" color="primary" onClick={()=> setIsEditing((isEditing)=> !isEditing)}>Edit</Button>
            <Button variant="outlined" color="error" size="medium"onClick={handleDelete}>Delete</Button>
            
        </div>
      )}
    </div>
  )
};


export default CocktailCard;