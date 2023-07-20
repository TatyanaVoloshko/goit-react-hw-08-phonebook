import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }} >
     <AppBar position="static" >
     <Toolbar>
     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
      <Navigation />
      </Typography>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
     </AppBar>
    </Box>
  );
};
