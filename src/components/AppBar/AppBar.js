import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import css from '../SharedLayout/SharedLayout.module.css'


export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
   <Box>
    <AppBar position="static" color="" className={css.Button}>
         <Toolbar className={css.Bar} sx={{ flexGrow: 1 }}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
     </AppBar>
    </Box>
  );
};
