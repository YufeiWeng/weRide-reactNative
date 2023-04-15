import React from 'react';
import Navigation from './src/navigation/navigation';
import Verification from './src/screens/Auth/Verification';
import Login from './src/screens/Auth/Login';
import setCustomText from './src/utils/setCustomText';
import {SafeAreaView, View} from 'react-native';
import ActivityBoardByDate from './src/components/ActivityBoard';
import OrderStatusBar from './src/components/OrderStatusBar';
import orderStatus from './src/constants/orderStatus';
import Activity from './src/screens/Main/Activity';
setCustomText();
const App = () => {
  // return (
  //   <SafeAreaView>
  //     <View style={{padding: 10}}>
  //       <OrderStatusBar selected={orderStatus.UPCOMING} />
  //     </View>
  //   </SafeAreaView>
  // );
  return <Navigation />;
  // return <Verification />;
  // return <Login />;
  // return <Activity />;
};

export default App;
