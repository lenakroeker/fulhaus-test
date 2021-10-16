const intitialState = {};

const cartReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const id = action.item._id;
      console.log(action.item);
      return { ...state, [id]: { ...action.item } };
    }
    case "REMOVE_ITEM": {
      let stateCopy = state;
      const id = action.item._id;
      delete stateCopy[id];
      return { ...stateCopy };
    }
    default:
      return state;
  }
};

export default cartReducer;
