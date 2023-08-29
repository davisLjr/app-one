import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar, Image} from 'react-native';
import {Input, Text, Button, Box, Flex, Spacer, Divider} from 'native-base';
import LogoApp from '../assets/colorFull.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login(props) {
  const {setUserName} = props;
  const [name, setName] = useState('');

  const onSubmit = () => {
    setUserName(name);
    // console.log(name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Image source={LogoApp} resizeMode="contain" style={styles.logo} />

      <Box style={styles.mainInput}>
        <Box>
          <Text style={styles.titleLogin}>Welcome Back</Text>
          <Text style={styles.tagLogin}>Enter your alias below</Text>
        </Box>

        <Input
          variant="underlined"
          placeholderTextColor="grey"
          placeholder="Colocá tu alias"
          style={styles.input}
          value={name}
          onChange={e => setName(e.nativeEvent.text)}
        />

        <Button style={styles.btnLogin} onPress={onSubmit}>
          <Text color="#fff">Come in</Text>
        </Button>

        <Flex style={styles.mainForgot}>
          <Divider />

          <Box>
            <Text style={styles.textForgot}>Or sign in width</Text>
          </Box>

          <Divider />
        </Flex>
        <Flex style={styles.mainOtherSign}>
          <Button
            size="lg"
            variant="outline"
            style={[styles.buttonOtherSign, {borderColor: '#ea4335'}]}
            leftIcon={<Icon name="google" size={20} color="#ea4335" />}>
            <Box>Google</Box>
          </Button>
          <Spacer />
          <Button
            size="lg"
            variant="outline"
            style={[styles.buttonOtherSign, {borderColor: '#1877F2'}]}
            leftIcon={
              <Icon name="facebook-square" size={20} color="#1877F2" />
            }>
            <Box>Facebook</Box>
          </Button>
        </Flex>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  mainInput: {
    position: 'absolute',
    width: '100%',
    height: '45%',
    bottom: 0,
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleLogin: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 40,
    color: '#26313e',
    textAlign: 'center',
    marginBottom: 5,
  },
  tagLogin: {
    fontSize: 15,
    color: '#727a83',
    textAlign: 'center',
  },
  input: {
    color: '#26313e',
    fontSize: 16,
  },
  btnLogin: {
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#305252',
  },
  mainForgot: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 20,
    overflow: 'hidden',
    alignItems: 'center',
  },
  textForgot: {
    color: '#727a83',
    fontSize: 14,
    marginHorizontal: 15,
  },
  mainOtherSign: {
    flexDirection: 'row',
  },
  buttonOtherSign: {
    width: '48%',
    marginTop: 20,
  },
});
