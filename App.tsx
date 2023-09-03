import React, {useState} from 'react';
import {NativeBaseProvider, Container} from 'native-base';
import {StyleSheet, LogBox} from 'react-native';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

// Ignorar las advertencias específicas utilizando LogBox
LogBox.ignoreLogs(['In React 18', 'Remote debugger']);

export default function App() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const completed = userName !== '' && userPassword !== '';

  return (
    <NativeBaseProvider>
      <Container style={styles.container} maxWidth="100%">
        {!completed ? (
          <Login setUserName={setUserName} setUserPassword={setUserPassword} />
        ) : (
          <Chat userName={userName} userPassword={userPassword} />
        )}
      </Container>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a1caff40',
  },
});
