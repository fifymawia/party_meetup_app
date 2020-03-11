import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$blackBlueColor',
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  bottomContainer: {
    flex: 1,
    marginTop: 30,
    // backgroundColor: '$blackBlueColor',

  },
  buttonStyle: {
    marginTop: 20 ,
    borderRadius: 20,

  },
  buttonText: {
    color: '$whiteColor',
    fontWeight: 'bold',
    textAlign: 'center',
   alignItems: 'center',
   justifyContent: 'center',

  },
  groupList: {
    color: '$whiteColor',
    fontWeight: 'bold',
    textAlign: 'center',
   alignItems: 'center',
   justifyContent: 'center',
  }

});
export default styles;
