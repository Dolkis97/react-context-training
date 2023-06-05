
import React, { useContext } from 'react';
import { AppContext } from './AppContext';
const UserInfo = () => {
  const { isUserLogged } = useContext(AppContext);

  return (
    <div>
      <p>Użytkownik jest {isUserLogged ? 'Zalogowany' : 'niezalogowany'}</p>
      
    </div>
  );
};

export default UserInfo;
