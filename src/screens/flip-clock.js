import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {Timer} from 'react-native-flip-timer';

function FlipClock() {
  const [play, setPlay] = useState(false);
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => goBack()}
        style={[styles.backButton, styles.shadowStyle]}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <Timer
        time={0}
        play={play}
        flipNumberProps={{numberStyle: {color: !play ? '#313131' : '#ffffff'}}}
      />
      <TouchableOpacity
        style={[styles.button, styles.shadowStyle]}
        onPress={() => {
          setPlay(!play);
        }}>
        <Text style={styles.text}>{play ? 'Pause' : 'Play'}</Text>
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
  backButton: {
    alignSelf: 'flex-start',
    padding: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    position: 'absolute',
    top: 10,
    left: 10,
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
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FlipClock;
