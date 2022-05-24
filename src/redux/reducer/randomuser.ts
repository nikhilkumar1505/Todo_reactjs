const INITIAL_STATE: any = {
  user: [],
};

const randomUserReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default randomUserReducer;
