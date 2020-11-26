import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  userContainer: {
    // flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff'
  },
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  imageTile: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  imageBox: {
    // backgroundColor: 'pink'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10
  },
  imageText: {
    marginLeft: 10,
    flexWrap: 'wrap',
    textAlign: 'left'
  },
  detailsBox: {
    flex: 0.7,
    width: '50%'
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = styles;
