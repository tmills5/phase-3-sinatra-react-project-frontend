import React from 'react';
import CocktailCard from './CocktailCard';
import {Grid, Box, Paper, styled} from '@mui/material'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CocktailList = ( {cocktails, deleteCocktail, onUpdateCocktail, reviews, setReviews} ) => {
  


  return(
    
    <Box className='box' sx={{flexGrow:1}}>
      <h2>-Your Drinks-</h2>
      <Grid container spacing={2} rowSpacing={1}>
    {/* <div className='cocktails-list'> */}
      <Grid item xs={6}>
      <Item>
      {cocktails.map(cocktail => {
        let eachReview = reviews.filter(review => {
          if (review.cocktail_id === cocktail.id) {
            return review 
          } else return null
        })
        return(
          <CocktailCard 
          key={cocktail.id}
          cocktail={cocktail}
          deleteCocktail={deleteCocktail}
          onUpdateCocktail={onUpdateCocktail}
          eachReview={eachReview}
          reviews={reviews}
          setReviews={setReviews}
        />
        )
      })}
      </Item>
      </Grid>
    {/* </div> */}
    </Grid>
    </Box>
  )
};

export default CocktailList;