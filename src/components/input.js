import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Platform} from 'react-native';
import {Box, Input as InputNB} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomInput(props) {
  const {sendMessage} = props;

  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (message.length > 0) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Box style={styles.boxInput}>
        <InputNB
          placeholder="Mensaje..."
          placeholderTextColor="grey"
          variant="rounded"
          style={styles.inputnb}
          value={message}
          onChange={e => setMessage(e.nativeEvent.text)}
          focusOutlineColor="#26313e"
        />
        <TouchableOpacity onPress={onSubmit}>
          <Icon name="send" size={25} style={styles.iconSend} />
        </TouchableOpacity>
      </Box>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 10,
  },
  boxInput: {
    paddingRight: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputnb: {
    color: '#26313e',
    backgroundColor: '#e7e7e7'
  },
  iconSend: {
    color: '#26313e',
    marginLeft: 15,
  },
});
