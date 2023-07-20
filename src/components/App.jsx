import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contact } from 'pages/Contact';
import css from './App.module.css';
import Container from '@mui/material/Container';


export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();
 
  useEffect(() => {
    dispatch(refreshUser()); 
    }, [dispatch]);

    
 
  return (
    isRefreshing ? (<h1>Loading...</h1>) :
      (<Container className={css.App} fixed>
        <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={<Home />} />
            <Route path='/register' element={<RestrictedRoute redirectTo='/contact' component={<Register/>}/>} />
            <Route path='/login' element={<RestrictedRoute redirectTo='/contact' component={<Login/>}/>} />
            <Route path='/contact' element={<PrivateRoute redirectTo='/login' component={<Contact/>}/>} />
          </Route>
        </Routes>
      </Container>)
    );
  };

 

  