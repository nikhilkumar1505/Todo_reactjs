import { ApiService } from "../services/Api.services";
import { ActionTypes } from "./action.type";

const actions = (dispatch: any) => {
  const getUser = async (gender: string, nat: string) => {
    try {
      const res: any = await ApiService.getDetails(gender, nat);

      if (res?.results) {
        dispatch({ type: ActionTypes.GET_RANDOM_USER, payload: res.results });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeGender = (gender: string) =>
    dispatch({ type: ActionTypes.CHANGE_GENDER, payload: gender });
  const changeNationality = (nat: string) =>
    dispatch({ type: ActionTypes.CHANGE_GENDER, payload: nat });
  return { getUser, changeGender, changeNationality };
};

export default actions;
