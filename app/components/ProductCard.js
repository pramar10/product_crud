import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';

export default function ProductCard({
  data = {},
  deletePress = () => {},
  editPress = () => {},
}) {
  const {img, name, price, offerPrice} = data;
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#adb5bd',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: img ? img : '',
          }}
          style={{width: 100, height: 90, borderRadius: 5}}
        />
        <View style={{marginLeft: 10}}>
          <Text>Name: {name}</Text>
          <Text>Price: {price}</Text>
          <Text>Offer Price :{offerPrice}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
        }}>
        <TouchableOpacity style={{marginRight: 20}} onPress={editPress}>
          <Icon name="pencil" size={18} color="#a9e34b" />
        </TouchableOpacity>
        <TouchableOpacity onPress={deletePress}>
          <Icon name="remove" size={20} color="#f03e3e" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
