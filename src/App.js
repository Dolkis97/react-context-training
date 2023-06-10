import React from 'react';
import AppProvider from './AppContext';
import Button from './Button';
import UserInfo from './UserInfo';
import './style.css';

const App = () => {
  return (
    <div>
      <AppProvider>
        <UserInfo />
        <Button />
      </AppProvider>
    </div>
  );
};
export default App;
