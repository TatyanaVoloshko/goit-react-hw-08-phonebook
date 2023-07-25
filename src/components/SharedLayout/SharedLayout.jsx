import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import css from './SharedLayout.module.css';
import { AppBarComponent } from 'components/AppBar/AppBar';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Box>
      <AppBarComponent className={css.Text} />
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>
      
    </Box>
  );
};
