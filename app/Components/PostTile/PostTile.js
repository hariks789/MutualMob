
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';

const Home = ({item, navigation}) => {
  const [loading, setLoading] = useState(false);
  const [data, setDataSource] = useState({});

  useEffect(() => getData(), []);

  const getData = () => {
    if (!loading) {
      console.log('getData');
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users?id=${item.userId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if(Array.isArray(responseJson)) {
          setDataSource(responseJson[0]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  return (
    <>
      <View style={styles.rootContainer}>
        <TouchableOpacity
          style={styles.listContainer}
          onPress={() => navigation.navigate('PostDetails', { postId: item.id } )}
        >
          <View style={styles.detailsBox}>
            <TouchableOpacity
              onPress={() => navigation.navigate('User', { userId: item.userId } )}
            >
              <Text style={styles.userText}>{data.name}</Text>
            </TouchableOpacity>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
