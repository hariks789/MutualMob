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
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  commentContainer: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  imageTile: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  imageBox: {
    // backgroundColor: 'pink'
  },
  titleText: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontWeight: 'bold',
    margin: 10,
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
