
const KatReducers = (state=1, action) => {

  console.log(action);

  switch (action.type) {
    case "KAT":
      return action.payload;
      break;
    default:
      return state;
  }
}

export default KatReducers;
