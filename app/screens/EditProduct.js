import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import CustomInput from '../components/CustomInput';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, updateItem} from '../actions/product';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../firebase';
import {Alert} from 'react-native';

export default function EditProduct({route}) {
  const id = route.params.item;
  const items = useSelector(state => state.items);
  const item = Object.values(items).find(item => item.id == id);
  const navigation = useNavigation();
  const [name, setName] = useState(item.name || '');
  const [price, setPrice] = useState(item.price || '');
  const [offerPrice, setOfferPrice] = useState(item.offerPrice || '');
  const [img, setImg] = useState(item.img || '');
  const dispatch = useDispatch();
  const selectImage = () => {
    try {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        setImg(image.path);
      });
    } catch (e) {
      console.log(e);
    }
  };
  const handleSave = () => {
    const item = {name, price, offerPrice, img, id};
    firebase.database().ref(`/product/${id}`).update(item);
    dispatch(updateItem(item));
    navigation.navigate('Home');
  };
  return (
    <View style={{backgroundColor: '#fff', flex: 1, paddingHorizontal: 10}}>
      <Header
        title={'Edit Product'}
        rightAction={true}
        onPressRight={handleSave}
      />
      <View style={{marginTop: 15}}>
        <CustomInput label={'Product Name'} value={name} onChange={setName} />
        <CustomInput
          label={'Product Price'}
          value={price}
          onChange={setPrice}
          type={'numeric'}
        />
        <CustomInput
          label={'Offer Price'}
          value={offerPrice}
          onChange={setOfferPrice}
          type={'numeric'}
        />
      </View>
      <View style={{marginHorizontal: 10, marginTop: 20, alignItems: 'center'}}>
        {img ? <Image source={{uri: img, width: 200, height: 200}} /> : null}
        <TouchableOpacity
          style={{
            marginTop: 10,
            padding: 10,
            backgroundColor: '#1971c2',
            marginLeft: 10,
            borderRadius: 5,
          }}
          onPress={selectImage}>
          <Text style={{color: '#fff', alignSelf: 'center'}}>Select Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
