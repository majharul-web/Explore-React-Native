import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";


const App = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  const [textWarning, setTextWarning] = useState('');
  const [numberWarning, setNumberWarning] = useState('');


  const onPressFunction = () => {
    if (text.length === 0) {
      setTextWarning('please enter your id')
    }
    if ((text.length > 0 && text.length < 9) || (text.length > 9)) {
      setTextWarning('id must be 8 char')
    }

    if (number.length === 0) {
      setNumberWarning('please enter your number')
    }
    if ((number.length > 0 && number.length < 11) || (number.length > 11)) {
      setNumberWarning('number must be 8 char')
      if ((number.startsWith('01') != true)) {
        setNumberWarning('valid input num')
      }
    }

  }


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text>{textWarning}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Text>{numberWarning}</Text>
      </View>
      <Pressable onPress={onPressFunction}>
        <Text>I'm pressable!</Text>
      </Pressable>

    </SafeAreaView>

  );
};


const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});
export default App;
