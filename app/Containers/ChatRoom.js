import React, {useEffect, useContext} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
  Button,
} from 'react-native';
import {SocketContext} from '../Contexts/socket';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [chatMessage, setMessage] = useState('');
  const socket = useContext(SocketContext);

  useEffect(() => {
    console.log('Logggg');
    try {
      socket.on(
        'connect',
        () => {
          console.log('Socket Connected');
        },
        () => {},
      );
      socket.on(
        'TEST',
        (event) => {
          console.log('Test received', event);
          setMessages((oldArray) => [...oldArray, event]);
        },
        () => {},
      );

      socket.onAny(() => {
        console.log('event !!!!!!');
      });
    } catch (error) {}
  }, [socket]);

  const sendMessage = () => {
    socket.emit(
      'TEST',
      {
        room: 'Code',
        from: 'majid',
        text: chatMessage ? chatMessage : 'Hello',
        createdAt: new Date().now,
      },
      () => {
        // this._scrollToBottom(50);
      },
    );
    setMessage('');
  };

  return (
    <SafeAreaView style={{flex: 1, marginTop: 20}}>
      <FlatList
        ref={(flatlist) => (this.flatlist = flatlist)}
        data={messages}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item}) => {
          const cellStyle = {
            container: {
              justifyContent: 'center',
              alignItems: item.from === 'me' ? 'flex-end' : 'flex-start',
            },
            textContainer: {
              maxWidth: '70%',
              marginHorizontal: 12,
              marginVertical: 5,
              paddingHorizontal: 13,
              paddingVertical: 8,
              backgroundColor: item.from === 'me' ? 'flex-end' : 'flex-start',
              borderRadius: 10,
            },
            text: {
              color: item.from === 'me' ? 'flex-end' : 'flex-start',
              fontSize: 15,
            },
          };
          console.log('item', item);
          return (
            <View style={cellStyle.container}>
              <View style={cellStyle.textContainer}>
                <Text style={cellStyle.text}> {item.text} </Text>
              </View>
            </View>
          );
        }}
      />
      <TextInput
        style={styles.sendBtn}
        autoCorrect={false}
        value={chatMessage}
        // onSubmitEditing={() => sendMessage()}
        onChangeText={(msg) => {
          setMessage(msg);
        }}
      />
      <Button onPress={sendMessage} title="Send" />
    </SafeAreaView>
  );
};

export default ChatRoom;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendBtn: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    // backgroundColor: '#2f73e0',
  },
});
