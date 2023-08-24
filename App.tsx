import React, {useState} from 'react';
import {NativeBaseProvider, Container} from 'native-base';
import {StyleSheet, View} from 'react-native';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

export default function App() {
  const [userName, setUserName] = useState(null);

  return (
    <NativeBaseProvider>
      <Container style={styles.container} maxWidth="100%">
        {!userName ? <Login /> : <Chat />}
      </Container>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16202b',
  },
});
