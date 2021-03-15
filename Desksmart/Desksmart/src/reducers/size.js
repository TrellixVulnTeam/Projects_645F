const WidthReducers = (state = 400, action) => {

  switch (action.type) {
    case "WIDTH":
      return action.payload;
      break;
    default:
      return state;
  }
}

export default WidthReducers;
