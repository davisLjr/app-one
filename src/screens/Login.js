import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar, Image} from 'react-native';
import {Input, Text, Button, Box} from 'native-base';
import LogoApp from '../assets/chatLogo.png';

export default function Login(props) {
  const {setUserName} = props;
  const [name, setName] = useState('');

  const onSubmit = () => {
    setUserName(name);
    // console.log(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View>
        <Image source={LogoApp} resizeMode="contain" style={styles.logo} />
      </View>

      <Box>
        <Input
          variant="underlined"
          placeholderTextColor="grey"
          placeholder="Ingrese su nombre"
          style={styles.input}
          value={name}
          onChange={e => setName(e.nativeEvent.text)}
        />
      </Box>

      <Button style={styles.btnLogin} onPress={onSubmit}>
        <Text>Entrar</Text>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 50,
    paddingVertical: 100,
  },
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  input: {
    color: '#FFFFFF',
  },
  btnLogin: {
    marginTop: 40,
    justifyContent: 'center',
    backgroundColor: '#0098d3',
  },
});
