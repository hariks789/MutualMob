import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';
import Api from '../../Lib/Api';

const Home = ({item, navigation}) => {
  const [loading, setLoading] = useState(false);
  const [data, setDataSource] = useState({});

  useEffect(() => getData(), []);

  const getData = () => {
    if (!loading) {
      setLoading(true);
      Api.get(`/users?id=${item.userId}`, null).then((resp) => {
        setLoading(false);
        if (Array.isArray(resp)) {
          setDataSource(resp[0]);
        }
      });
    }
  };

  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => navigation.navigate('PostDetails', {postId: item.id})}>
        <View style={styles.detailsBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate('User', {userId: item.userId})}>
            <Text style={styles.userText}>{data.name}</Text>
          </TouchableOpacity>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
