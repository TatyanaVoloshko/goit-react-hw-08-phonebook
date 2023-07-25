import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import css from './App.module.css';
import Container from '@mui/material/Container';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contact = lazy(() => import('../pages/Contact'));



const App = () => {
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
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Container>)
    );
  };

  export default App;
 

  