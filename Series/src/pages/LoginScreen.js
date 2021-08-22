import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';

function LoginScreen() {
  const [infos, setInfos] = useState({
    mail: '',
    password: ''
  });

  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyA1z-W9zr-3SpIBsB61GwW6p0Rj9myoOBM",
      authDomain: "cursornseries.firebaseapp.com",
      projectId: "cursornseries",
      storageBucket: "cursornseries.appspot.com",
      messagingSenderId: "723185378507",
      appId: "1:723185378507:web:99ba801067cb6cc332a74e",
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }, [])

  const onChangeInfos = (field, value) => {
    setInfos({
      ...infos,
      [field]: value,
    });
  }

  const doLogin = () => {
    console.log();
  }

  return (
    <View style={styles.container}>
      <FormRow>
        <TextInput
          style={styles.input}
          placeholder="user@email.com"
          value={infos.mail}
          onChangeText={text => onChangeInfos('mail', text)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          style={styles.input}
          placeholder="******"
          secureTextEntry
          value={infos.password}
          onChangeText={text => onChangeInfos('password', text)}
        />
      </FormRow>

      <Button title='Entrar' onPress={doLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 5,
    paddingBottom: 5,

  },
  container: {
    paddingHorizontal: 20,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})


export default LoginScreen;