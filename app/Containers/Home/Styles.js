import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 20,
  },
  listContainer: {
    // flexDirection: 'row',
    padding: 20,
  },
  imageTile: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  imageBox: {
    // backgroundColor: 'pink'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  imageText: {
    marginLeft: 10,
    flexWrap: 'wrap',
    textAlign: 'left',
  },
  detailsBox: {
    flex: 0.7,
    width: '50%',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = styles;
