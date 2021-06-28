import React from 'react';
import {Provider} from 'react-redux';
import MainStackNavigator from './Router';
import store from './Store';
import {SocketContext} from '../app/Contexts/socket';
import {io, socketio} from 'socket.io-client';

const App = () => {
  const getSocket = async () => {
    const token = null; // get jwt token from local storage or cookie
    let socket;
    if (token) {
      socket = socketio.connect('https://ea0f1b2c0ef0.ngrok.io', {
        query: {token},
      });
    }
    socket = io('https://ea0f1b2c0ef0.ngrok.io');
    console.log(socket, socket);

    // socket.on('connect', () => {
    //   console.log(socket.id); // "G5p5..."
    // });

    // socket.onAny(() => {
    //   console.log('event !!!!!!');
    // });
    return socket;
  };

  return (
    <Provider store={store}>
      <SocketContext.Provider value={getSocket()}>
        <MainStackNavigator />
      </SocketContext.Provider>
    </Provider>
  );
};

export default App;
