import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/authOperations';


export const UserMenu = () => {
  const dispatch = useDispatch();
  
 
  return (
    <div >
      <p >Welcome in your contacts book!</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  )
};
