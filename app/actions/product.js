import {ADD_ITEM, DELETE_ITEM, GET_ITEMS, UPDATE_ITEM} from './types';
import firebase from '../../firebase';

export const getItem = () => {
  return async dispatch => {
    const snapshot = await firebase.database().ref('product/').once('value');
    const data = snapshot.val();
    dispatch({
      type: GET_ITEMS,
      data: data,
    });
  };
};

export const addItem = data => ({
  type: ADD_ITEM,
  data: data,
});
export const deleteItem = data => ({
  type: DELETE_ITEM,
  data: data,
});
export const updateItem = data => ({
  type: UPDATE_ITEM,
  data: data,
});
