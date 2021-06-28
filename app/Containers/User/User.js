import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import styles from './Styles';
import Api from '../../Lib/Api';

const User = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);
  const [data, setDataSource] = useState([]);

  useEffect(() => getData(), []);

  const getData = () => {
    const userId = route.params.userId;

    if (!loading) {
      setLoading(true);
      Api.get(`/users?id=${userId}`, null).then((resp) => {
        setLoading(false);
        if (Array.isArray(resp)) {
          setDataSource(resp[0]);
        }
      });
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.userContainer}>
          <Text style={styles.userName}>{data.name}</Text>
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
