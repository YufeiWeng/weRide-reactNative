import type {Node} from 'react';
import React from 'react';
import Navigation from './src/navigation/navigation';
import Verification from './src/screens/Verification';
import Login from './src/screens/Login';
import setCustomText from './src/utils/setCustomText';
setCustomText();
const App: () => Node = () => {
  return <Navigation />;
  // return <Verification />;
  // return <Login />;
};

export default App;
