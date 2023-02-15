import React from 'react';
import {SafeAreaView} from 'react-native';
import {AuthContext} from '../../navigation/navigation';

const Index = () => {
  const auth = React.useContext(AuthContext);
  return <SafeAreaView />;
};

export default Index;
