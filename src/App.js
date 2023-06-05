import React, { useState } from 'react';
import { AppContext, defaultObject } from './AppContext';
import Button from './Button';
import UserInfo from './UserInfo';
import './style.css';

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);
  const toggleLoggedState = () => {
    setIsUserLogged((prevValue) => !prevValue);
  };
  return (
    <div>
      <AppContext.Provider value={{ isUserLogged, toggleLoggedState }}>
        <UserInfo />
        <Button />
      </AppContext.Provider>
    </div>
  );
};
export default App;
