import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, View, ScrollView, Keyboard} from 'react-native';
import {HStack, Text} from 'native-base';
import moment from 'moment';
import {map} from 'lodash';
import CustomInput from '../components/input';
import Message from '../components/Message';
import {app} from '../utils/firebase'; // Importa la instancia de Firebase desde utils/firebase
import {getDatabase, ref, push, onValue} from 'firebase/database';

export default function Chat(props) {
  const {userName} = props;
  const [messages, setMessages] = useState([]);
  const chatScrollReft = useRef();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const keyboardDidShowListener = Keyboard.addListener(
    'keyboardDidShow',
    () => {
      setIsKeyboardOpen(true);
      console.log('Teclado abierto');
    },
  );

  const keyboardDidHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => {
      setIsKeyboardOpen(false);
      console.log('Teclado cerrado');
    },
  );

  useEffect(() => {
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const chat = ref(getDatabase(app), 'general');
    onValue(chat, snapshot => {
      const data = snapshot.val();
      console.log(data); // Puedes hacer lo que necesites con los datos recibidos
      setMessages(snapshot.val());
    });
  }, []);

  useEffect(() => {
    chatScrollReft.current.scrollToEnd({animated: true});
  }, [messages, isKeyboardOpen]);

  const sendMessage = message => {
    const time = moment().format('hh:mm a');
    const database = getDatabase(app);
    const messagesRef = ref(database, 'general');
    push(messagesRef, {
      userName, // Cambia 'John' por el nombre de usuario adecuado
      text: message,
      time,
    });
  };

  return (
    <>
      <HStack
        w="100%"
        borderBottomWidth={1}
        borderColor="#373E40"
        bg="#fff"
        px="6"
        py="3"
        iosBarStyle="light-content"
        androidStatusBarColor="light-content">
        <HStack alignItems="left">
          <Text color="#373E40" fontSize="30" fontWeight="500">
            Inbox
          </Text>
        </HStack>
      </HStack>
      <View style={styles.content}>
        <ScrollView style={styles.chatView} ref={chatScrollReft}>
          {map(messages, (message, index) => (
            <Message key={index} message={message} name={userName} />
          ))}
        </ScrollView>
        <CustomInput sendMessage={sendMessage} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  chatView: {
    backgroundColor: '#fff',
  },
});
