import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import AddProduct from '../screens/AddProduct';
import EditProduct from '../screens/EditProduct';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function ScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Add_Product" component={AddProduct} />
      <Stack.Screen name="Edit_Product" component={EditProduct} />
    </Stack.Navigator>
  );
}
