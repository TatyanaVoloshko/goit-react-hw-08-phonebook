import { useAuth } from 'hooks';
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import Box from '@mui/material/Box';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }} >
      
      <NavLink to="/" className={css.Link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contact" className={css.Link}>
          Contacts
        </NavLink>
      )}
    </Box>
  );
};
