import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

export default function Header({
  title,
  rightAction = false,
  onPressRight = () => {},
}) {
  const naivgation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 15,
      }}>
      <Icon
        name="arrow-left"
        size={20}
        color="#000"
        onPress={() => naivgation.goBack()}
      />
      <Text style={{fontWeight: '600', fontSize: 16, color: '#000'}}>
        {title}
      </Text>
      {rightAction ? (
        <TouchableOpacity
          style={{padding: 10, backgroundColor: '#1c7ed6', borderRadius: 10}}
          onPress={onPressRight}>
          <Text
            style={{
              color: '#fff',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
    </View>
  );
}
