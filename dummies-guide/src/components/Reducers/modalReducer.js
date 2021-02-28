const initState = {
  isSent: false,
};

const modalReducer = (state = initState, action) => {
  switch (action.type) {
    case "MODAL":
      return {
        ...state,
        isSent: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
