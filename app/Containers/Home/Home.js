/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
import PostTile from '../../Components/PostTile';
import Api from '../../Lib/Api';

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  useEffect(() => getData(), []);

  const getData = () => {
    console.log(offset);
    if (!loading && !isListEnd) {
      console.log('getData');
      setLoading(true);
      Api.get('/posts?_page=${offset}&_limit=10', null).then(resp => {
        console.log(resp, 'APi uti');
        if (Array.isArray(resp)) {
          setOffset(offset + 1);
          setDataSource([...dataSource, ...resp]);
          setLoading(false);
        } else {
          setIsListEnd(true);
          setLoading(false);
        }
      });
    }
  };

  const ItemView = ({item}) => {
    return (
      <PostTile item={item} navigation={navigation} />
    );
  };

  const gotoDetails = () => {

  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.rootContainer}>
        <FlatList
          data={dataSource}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
          onEndReached={getData}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;