import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  activityContainer: {
    marginBottom: 20,

    height: 258,
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#D1D5E5',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2, // This property is only applicable to Android devices
    flex: 1,
  },
  pendingText: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '700',
    paddingLeft:"2%"
    
    
  },
  pendingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelRideView: {
    flexDirection: 'column',
  },
  cancelRide: {
    marginTop: '2%',
    textDecorationLine: 'underline',
  },

  userInfo: {
    height: '30%',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#D1D5E5',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  avatar: {
    height: 50,
    width: 50,
    margin: scale(15),
    borderRadius: 10,
  },

  tripInfo: {
    height: '60%',
    width: '100%',
  },
  buttom: {
    height: '10%',
    width: '90%',
    paddingLeft: '10%'
  },
  btn : {
    height:33,
    padding:3,
    marginVertical: 4,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flexContainer1: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:'5%',
    paddingLeft:"5%"
  },

  lookUp: {
    margin: scale(20),
  },
  princeOrTime: {
    color: '#96A0B5',
    fontSize: scale(14),
  },

  rowContainer1: {
    marginLeft: scale(20),
    marginRight: scale(20),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50%',
  },
  rowContainer2: {
    marginLeft: scale(30),
    marginRight: scale(30),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50%',
  },

  address: {
    fontWeight: '700',
    fontSize: scale(14),
    lineHeight: scale(21),
    paddingLeft: scale(15),
  },
  cost: {
    fontSize: scale(14),
    color: '#96A0B5',
    fontWeight: '700',
  },
  date: {
    fontWeight: '700',
    fontSize: scale(16),
    marginBottom: scale(10),
  },
});

export default styles;
