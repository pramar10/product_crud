import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../components/ProductCard';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {deleteItem, getItem} from '../actions/product';
import firebase from '../../firebase';
import {useEffect} from 'react';
import {RefreshControl} from 'react-native';
import {useState} from 'react';

function HomeScreen() {
  const navigation = useNavigation();
  const productData = useSelector(state => state.items) || {};
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const deleteHandler = item => {
    firebase.database().ref(`/product/${item.id}`).remove();
    dispatch(deleteItem(item.id));
  };
  const editHandler = item => {
    navigation.navigate('Edit_Product', {item: item.id});
  };
  useEffect(() => {
    dispatch(getItem());
    setRefreshing(false);
  }, []);
  const handlePullRefresh = () => {
    dispatch(getItem());
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 5,
        }}>
        <Text
          style={{
            fontSize: 18,
            padding: 5,
            fontWeight: '600',
            color: '#000',
          }}>
          Products
        </Text>
        <TouchableOpacity
          style={{padding: 10, backgroundColor: '#364fc7', borderRadius: 8}}
          onPress={() => navigation.navigate('Add_Product')}>
          <Text style={{color: '#fff'}}>Add Product</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10, marginHorizontal: 10, flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Object.values(productData)}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handlePullRefresh}
            />
          }
          contentContainerStyle={{paddingBottom: 10}}
          renderItem={({item}) => (
            <ProductCard
              data={item}
              deletePress={() => deleteHandler(item)}
              editPress={() => editHandler(item)}
            />
          )}
        />
      </View>
    </View>
  );
}
export default HomeScreen;
