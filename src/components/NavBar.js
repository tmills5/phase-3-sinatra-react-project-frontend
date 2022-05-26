// import React from "react";

// import Button from '@mui/material/Button';



// const NavBar = () => {

//     return (
//         <>
//         <Button variant="outlined">Outlined</Button>
//         </>
//     );
// };

// export default NavBar;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';


const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Drinksy : Discover and Save your Favorite Cocktails
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;