import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import css from './SharedLayout.module.css';
import { AppBarComponent } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <Box>
      <AppBarComponent className={css.Text} />
      <Outlet />
    </Box>
  );
};
