import {
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEMS,
  SET_ITEM,
  UPDATE_ITEM,
} from '../actions/types';

const initialState = {
  items: {},
  item: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS: {
      return {
        ...state,
        items: action.data,
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        items: {...state.items, [action.data.id]: action.data},
      };
    }
    case DELETE_ITEM: {
      const newItem = {...state.items};
      const items = Object.values(newItem).filter(
        item => item.id !== action.data,
      );
      return {
        ...state,
        items: {...items},
      };
    }
    case UPDATE_ITEM: {
      return {
        ...state,
        items: {...state.items, [action.data.id]: action.data},
      };
    }

    default:
      return state;
  }
};
