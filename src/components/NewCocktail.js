import React, { useState } from "react";

const NewCocktail = ({cocktails, setCocktails}) => {
    const [newCocktailName, setNewCocktailName] = useState("");
    const [newCocktailImage, setNewCocktailImage] = useState("");
      
//Handle Form Submit------------------
      
    function handleSubmit(event) {
        event.preventDefault();
      
        let newCocktail = { 
            cocktail_name: newCocktailName, 
            image: newCocktailImage };
      
        //console.log(newCocktail) //!-----WORKS!
      
        const configObj = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify(newCocktail)
        }
console.log(configObj)
        fetch("http://localhost:9292/cocktails", configObj)
          .then(response => response.json())
          .then((newCocktail) => { console.log(newCocktail)
            setCocktails([newCocktail, ...cocktails])
      
            setNewCocktailName("");
            setNewCocktailImage("");
          })
        }
      
      
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New Cocktail Name..." value={newCocktailName} onChange={(e)=> setNewCocktailName(e.target.value)}></input>
            <input type="text" placeholder="New Cocktail Image..." value={newCocktailImage} onChange={(e)=> setNewCocktailImage(e.target.value)}></input>
            <button type="submit" id="submit" name="Submit">Add</button>
        </form>    
          );
};

export default NewCocktail;