const initialState = { items: [] };

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return { ...state, items: [...state.items, action.payload] };
    }
    case "DELETE": {
      const newData = state.items.filter(
        (item, index) => action.payload != index
      );

      return { ...state, items: newData };
    }

    default:
      return state;
  }
};
