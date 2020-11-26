import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  listContainer: {
    // flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  imageTile: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  imageBox: {
    // backgroundColor: 'pink'
  },
  userText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  titleText: {

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
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = styles;
