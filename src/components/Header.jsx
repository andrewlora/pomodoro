import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const options = ['Pomodoro', 'Short Break', 'Long Break'];
const Header = ({ setTime, currentTime, setCurrentTime }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.items, currentTime !== index && { borderColor: 'transparent' }]}
          onPress={() => handlePress(index)}
        >
          <Text style={styles.title}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  items: {
    width: '33%',
    borderWidth: 3,
    padding: 5,
    borderColor: 'white',
    marginVertical: 20,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
