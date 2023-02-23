import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';
import {StyleSheet} from 'react-native';

export default function CustomInput({
  value,
  label,
  type = 'default',
  onChange = () => {},
}) {
  return (
    <View style={{marginHorizontal: 10, marginTop: 15}}>
      <Text style={{color: '#000'}}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        keyboardType={type}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
});
