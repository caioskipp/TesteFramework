import {createStore} from 'redux';

const INITIAL_STATE = {
  cart: [],
};

function cartItens(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {...state, cart: [...state.cart, action]};
    case 'REMOVE_FROM_CART':
      let aux = state.cart.filter(item => item.item.id !== action.item.id);
      return {
        ...state,
        cart: aux,
      };
    default:
      return state;
  }
}

const store = createStore(cartItens);
export default store;
