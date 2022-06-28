import React, {useState} from "react";


const EditCocktailForm = ({ cocktail, onUpdateCocktail }) => {
   const { id, cocktail_name, image } = cocktail;

   const [updatedCocktailName, setUpdatedCocktailName] = useState(cocktail_name);
   const [updatedImage, setUpdatedImage] = useState(image);

  //Handle update submit

  function handleUpdateSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:9292/cocktails/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cocktail_name: updatedCocktailName, image: updatedImage }),
    })
      .then((r) => r.json())
      .then((updatedCocktail) => {
        //console.log(updatedCocktail)
        onUpdateCocktail(updatedCocktail)
      })
  }

    return (
        <form onSubmit={handleUpdateSubmit}>
         <input
          id="cocktail name"
          type="text"
          name="cocktail name"
          value={updatedCocktailName}
          onChange={e=> setUpdatedCocktailName(e.target.value)}
          />
          <input
          id="image"
          type="text"
          name="image"
          value={updatedImage}
          onChange={e=> setUpdatedImage(e.target.value)}
          />
          <input type="submit" value="update" />
        </form>  

    );
};

export default EditCocktailForm;