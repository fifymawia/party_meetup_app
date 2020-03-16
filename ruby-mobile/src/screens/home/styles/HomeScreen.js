import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',

    // backgroundColor: '$blackBlueColor',
  },
  topContainer: {
    flex: 1 ,
    //justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '$redColor',
  },
  bottomContainer: {
    flex: 4.5,
    marginTop: 5,
    backgroundColor: '$whiteColor',

  },
  buttonText: {
    color: '$redColor',
    fontWeight: 'bold',
    textAlign: 'center',
   alignItems: 'center',
   justifyContent: 'center',

  },
  myCard: {
   height: 200,
    width: 175,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '$redColor',
    flex: 1,
  },

});
export default styles;
