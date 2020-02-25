import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,

  },
  titleContainer: {
    //flex: 1,
    paddingHorizontal: '2.5%',
    // paddingVertical: '2.5%',

  },
  title: {
    color: '$whiteColor',
    fontSize: 25,

  },
  contentContainer: {
    flex: 1,
  },
  contributionCard: {
    // height: 200,
    width: 175,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '$redColor',
    flex: 1
  },
  contributionCardTop: {
    flex: 1,
    position: 'relative',
  },
  contributionCardTitle: {
    position: 'absolute',
    color: '$whiteColor',
    top: '2%',
    left: '2.5%',
  },
  contributionCardBottom: {
    flex: 0.4,
    backgroundColor: '$whiteColor',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',

  },
  contributionCardDate: {
    fontSize: 13,
  },

});
export default styles;
