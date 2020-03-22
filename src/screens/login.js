import React, {useCallback, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import VKLogin from 'react-native-vkontakte-login';

function Login() {
  const {navigate} = useNavigation();

  useEffect(() => {
    VKLogin.initialize('7368595');
  }, []);

  const login = useCallback(async () => {
    const isLoggedIn = await VKLogin.isLoggedIn();
    if (!isLoggedIn) {
      const auth = await VKLogin.login(['friends', 'photos', 'email']);
      if (auth.access_token) {
        navigate('Menu');
      }
    } else {
      navigate('Menu');
    }
  }, [navigate]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.loginButton, styles.shadowStyle]}
        onPress={login}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    width: '80%',
    maxWidth: 300,
    padding: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Login;
