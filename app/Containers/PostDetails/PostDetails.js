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
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import styles from './Styles';
import Api from '../../Lib/Api';

const Post = ({ route, navigation }) => {
	const [loading, setLoading] = useState(false);
	const [commentLoading, setCommentLoading] = useState(false);
  const [data, setDataSource] = useState([]);
  const [comments, setComments] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  useEffect(() => getData(), []);
  useEffect(() => getComments(), []);

  const getData = () => {
    const postId = route.params.postId;

		setLoading(true);
		Api.get(`/posts?id=${postId}`, null).then(resp => {
			setLoading(false);
			console.log('responseJson', resp[0]);
			if(Array.isArray(resp)) {
				setDataSource(resp[0]);
			}
		});
  };

  const getComments = () => {
    const postId = route.params.postId;

    if (!commentLoading && !isListEnd) {
			console.log('get Comments');
			setCommentLoading(true);
			Api.get(`/comments?postId=${postId}`, null).then(resp => {
        console.log(resp, 'APi uti');
        if (Array.isArray(resp)) {
					setOffset(offset + 1);
					setComments([...comments, ...resp]);
					setCommentLoading(false);
				} else {
					setIsListEnd(true);
					setCommentLoading(false);
				}
      });
    }
  };

  const ItemView = ({item}) => {
    console.log('item', item);
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.titleText}>{item.name}</Text>
        <Text>{item.body}</Text>
      </View>
    );
	};
	

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.userContainer}>
          <Text style={styles.titleText}>{data.title}</Text>
          <Text style={styles.bodyText}>{data.body}</Text>
        </View>
        <Text style={styles.subTitle}>Comments</Text>
        <FlatList
          data={comments}
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

export default Post;
