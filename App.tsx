import React, {useState} from 'react';
import {NativeBaseProvider, Container} from 'native-base';
import {StyleSheet, LogBox} from 'react-native';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

// Ignorar las advertencias específicas utilizando LogBox
LogBox.ignoreLogs(['In React 18', 'Remote debugger']);

export default function App() {
  const [userName, setUserName] = useState(null);

  return (
    <NativeBaseProvider>
      <Container style={styles.container} maxWidth="100%">
        {!userName ? (
          <Login setUserName={setUserName} />
        ) : (
          <Chat userName={userName} />
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
