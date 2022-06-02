// import React from 'react';
// // import CssBaseline from '@mui/material/CssBaseline';
// //import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import CocktailCard from './CocktailCard';

import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CocktailCard from './CocktailCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function MainContainer( {cocktails} ) {
// console.log(cocktails)

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={6} md={4}>
          <Item>
            <CocktailCard />
          </Item>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};


export default MainContainer;