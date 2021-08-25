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
  const [message, setMessage] = useState('');

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

  const renderMessage = () => {
    if (!message) {
      return null;
    }

    return (
      <View>
        <Text>{message}</Text>
      </View>
    )
  }

  const renderButton = () => {
    if (isLoading) {
      return <ActivityIndicator animating={true} nimating={true} color='blue' />
    }

    return <Button title='Entrar' onPress={doLogin} />
  }

  const getMessageByErrorCode = (errorCode) => {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
      default:
        return 'Erro desconhecido';
    }
  }

  const doLogin = () => {
    setIsLoading(true);
    setMessage('');

    firebase
      .auth()
      .signInWithEmailAndPassword(infos.mail, infos.password)
      .then(user => {
        setMessage('Sucesso');
      })
      .catch(error => {
        setMessage(getMessageByErrorCode(error.code));
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
      {renderMessage()}
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