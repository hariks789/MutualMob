
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import styles from './Styles';
import PostTile from '../../Components/PostTile/PostTile';
import Api from '../../Lib/Api';

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  useEffect(() => getData(), []);

  const getData = () => {
    console.log(offset);
    if (!loading && !isListEnd) { //Checking if list ended & ongoing API call happening
      setLoading(true);
      Api.get('/posts?_page=${offset}&_limit=10', null).then(resp => {
        if (Array.isArray(resp) && resp.length > 0) {
          setOffset(offset + 1); //Incrementing next page
          setDataSource([...dataSource, ...resp]);
        } else {
          setIsListEnd(true); //Handling list end;
        }
        setLoading(false);
      });
    }
  };

  const ItemView = ({item}) => {
    return (
      <PostTile item={item} navigation={navigation} />
    );
  };

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
