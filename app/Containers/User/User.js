
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import styles from './Styles';
// import Api from '../Lib/Api/Api';

const User = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const [data, setDataSource] = useState([]);

  useEffect(() => getData(), []);

  const getData = () => {
    const userId = route.params.userId;

    if (!loading) {
      console.log('getData');
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
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
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.userContainer}>
          <Text style={styles.userText}>{data.name}</Text>
          <Text style={styles.userText}>{data?.company?.name}</Text>
          <Text style={styles.userText}>{data.email}</Text>
          <Text style={styles.userText}>{data.website}</Text>
          <Text style={styles.userText}>{data.phone}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default User;
