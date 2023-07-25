import React from 'react'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Box from '@mui/material/Box';
import css from './Home.module.css'


 const Home = () => {
  return (
    <div className={css.Box}>
        <Box 
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
       <h1 className={css.Title}>
      Convenient contact list {' '}
     <ContactPhoneIcon sx={{ fontSize: 30 }} />
     </h1>
    </Box>
    </div>
  
  )
}

export default Home;
