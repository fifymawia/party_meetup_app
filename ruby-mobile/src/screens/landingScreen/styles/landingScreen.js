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

});
export default styles;
