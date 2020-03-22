import React, {useCallback} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';

import VKLogin from 'react-native-vkontakte-login';

function Menu() {
  const {navigate} = useNavigation();

  const choiceQuestion = useCallback(() => {
    navigate('Questions');
  }, [navigate]);

  const logout = useCallback(() => {
    VKLogin.logout().then(r => {
      console.log(r);
      navigate('Login');
    });
  }, [navigate]);

  const openFlipClock = useCallback(() => {
    navigate('FlipClock');
  }, [navigate]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.shadowStyle]}
        onPress={choiceQuestion}>
        <Text style={styles.loginText}>Choice Questions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.shadowStyle]}
        onPress={logout}>
        <Text style={styles.loginText}>Log Out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.shadowStyle]}
        onPress={openFlipClock}>
        <Text style={styles.loginText}>Flip Clock</Text>
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
  button: {
    width: '80%',
    maxWidth: 300,
    padding: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 20,
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

export default Menu;
