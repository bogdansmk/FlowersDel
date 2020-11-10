const initialState = {
  name: 'Евгений',
  email: '',
  sex: 'male',
  avatar: '',
  favourites: [],
  cart: [],
  orders: [
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      status: 'Выполняется',
      price: '249 грн.',
      date: '14.02.2021',
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-TO-FAVOURITES':
      const isInFav = state.favourites.indexOf(action.payload) !== -1;

      return {
        ...state,
        favourites: isInFav
          ? state.favourites.filter((item) => item.id !== action.payload.id)
          : [...state.favourites, action.payload],
      };

    case 'ADD-TO-CART':
      const isInCart = state.cart.indexOf(action.payload) !== -1;

      return {
        ...state,
        cart: isInCart
          ? state.cart.filter((item) => item.id !== action.payload.id)
          : [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export const addToFavourites = (payload) => {
  return {
    type: 'ADD-TO-FAVOURITES',
    payload,
  };
};

export const addToShoppingCart = (payload) => {
  return {
    type: 'ADD-TO-CART',
    payload,
  };
};

export default userReducer;
