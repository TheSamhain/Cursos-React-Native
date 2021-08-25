import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, Button, ActivityIndicator } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';

function LoginScreen() {
  const [infos, setInfos] = useState({
    mail: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);

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
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [])

  const onChangeInfos = (field, value) => {
    if (field == 'mail') {
      value = String(value).toLowerCase();
    }

    setInfos({
      ...infos,
      [field]: value,
    });
  }

  const renderButton = () => {
    if (isLoading) {
      return <ActivityIndicator />
    }

    return <Button title='Entrar' onPress={doLogin} />
  }

  const doLogin = () => {
    setIsLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(infos.mail, infos.password)
      .then(user => {
        console.log('Logado', user);
      })
      .catch(err => {
        console.log('Erro', err);
      })
      .then(() => setIsLoading(false));
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

      {renderButton()}
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