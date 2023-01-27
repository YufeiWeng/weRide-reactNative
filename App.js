/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import Navigation from './src/navigation/navigation';
import Verification from './src/screens/Verification';
import Login from './src/screens/Login';

const App: () => Node = () => {
  return <Navigation />;
  // return <Verification />;
  // return <Login />;
};

export default App;
