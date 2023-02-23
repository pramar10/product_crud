import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import CustomInput from '../components/CustomInput';
import {useDispatch} from 'react-redux';
import {addItem} from '../actions/product';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../firebase';
import {Alert} from 'react-native';

export default function AddProduct() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [offerPrice, setOfferPrice] = useState('');
  const [img, setImg] = useState('');
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
    if (!name || !price || !offerPrice || !img) {
      Alert.alert('Fill all the data');
      return;
    }
    const id = Math.floor(Math.random() * 1000000000);
    const item = {name, price, offerPrice, img, id};
    firebase.database().ref(`product/${id}`).set(item);
    dispatch(addItem(item));
    navigation.navigate('Home');
  };
  return (
    <View style={{backgroundColor: '#fff', flex: 1, paddingHorizontal: 10}}>
      <Header
        title={'Add Product'}
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
        {img ? <Image source={{uri: img, width: 300, height: 200}} /> : null}
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
