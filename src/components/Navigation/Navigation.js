import { useAuth } from 'hooks';
import React from 'react';
import { NavLink } from 'react-router-dom';
  

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
  return (
<nav>
<NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contact">
          Contacts
        </NavLink>
      )}
    
</nav>
  )
}
