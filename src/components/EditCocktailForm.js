import React, {useState} from "react";


const EditCocktailForm = ({ cocktails, setCocktails, navigate}) => {
    const [updatedCocktailName, setNewCocktailName] = useState("");
    const [updatedCocktailCategory, setNewCocktailCategory] = useState("");
    const [updatedCocktailImage, setNewCocktailImage] = useState("");
    const [updatedCocktailGlass, setNewCocktailGlass] = useState("");

      //Handler Change Functions-----------

  function handleNameUpdate(event) {
    setNewCocktailName(event.target.value);
  };

  function handleCategoryUpdate(event) {
    setNewCocktailCategory(event.target.value);
  };

  function handleImageUpdate(event) {
    setNewCocktailImage(event.target.value);
  };

  
  function handleGlassUpdate(event) {
    setNewCocktailGlass(event.target.value);
  };

  //Handle update submit

  function handleUpdateSubmit(event) {
    event.preventDefault();

    let updatedCocktail = { updatedCocktailName,
      updatedCocktailCategory,
      updatedCocktailImage,
      updatedCocktailGlass };

console.log(updatedCocktail) //!-----WORKS!


    fetch("http://localhost:9292/cocktails/:id", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    },
      body: JSON.stringify({
        cocktail_name: updatedCocktailName,
        category: updatedCocktailCategory,
        image: updatedCocktailImage,
        glass: updatedCocktailGlass
      })
    })
    .then(response => response.json())
    .then(updatedCocktail => {
console.log(updatedCocktail)  
      const updatedCocktailsArray = [updatedCocktail, ...cocktails]

      setCocktails(updatedCocktailsArray);
console.log(updatedCocktailsArray)

      setNewCocktailName("");
      setNewCocktailCategory("");
      setNewCocktailImage("");
      setNewCocktailGlass("");
    })
  }

    return (
       <>
        <form onSubmit={handleUpdateSubmit}>
          <input type="text" placeholder="New Cocktail Name..." value={updatedCocktailName} onChange={handleNameUpdate}></input>
          <input type="text" placeholder="New Cocktail Category..." value={updatedCocktailCategory} onChange={handleCategoryUpdate}></input>
          <input type="text" placeholder="New Cocktail Image..." value={updatedCocktailImage} onChange={handleImageUpdate}></input>
          <input type="text" placeholder="New Cocktail Glass..." value={updatedCocktailGlass} onChange={handleGlassUpdate}></input>
          <button type="submit" id="submit" name="Submit" >Update</button>
        </form>  
       </>
    );
};

export default EditCocktailForm;