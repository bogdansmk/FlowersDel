const initialState = {
  items: [
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      price: '249 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      price: '299 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      price: '199 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      price: '249 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      price: '299 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      price: '199 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 1',
      price: '249 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 2',
      price: '299 грн.',
    },
    {
      id: (Math.random() * 1000).toString(),
      name: 'Название 3',
      price: '199 грн.',
    },
  ],
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default catalogReducer;
