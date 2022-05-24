import { ActionTypes } from "./action.type";

interface StateType {
  gender: string;
  nat: string;
  profile: any[];
}

export const INTIAL_STATE = {
  gender: "All",
  nat: "AU",
  profile: [],
};

export const reducer = (state: StateType, action: any) => {
  switch (action.type) {
    case ActionTypes.CHANGE_GENDER: {
      return { ...state, gender: action.payload };
    }
    case ActionTypes.CHANGE_NATIONALITY: {
      return { ...state, nat: action.payload };
    }
    case ActionTypes.GET_RANDOM_USER: {
      return { ...state, profile: action.payload };
    }
    default: {
      return state;
    }
  }
};
