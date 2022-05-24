import { ApiService } from "../../services/Api.services";
export const getRandomUser =
  (gender: string, nat: string) => async (dispatch: any) => {
    try {
      const res: any = await ApiService.getDetails(gender, nat);
      if (res) {
        dispatch({ type: "GET_USER", payload: res.results });
      }
    } catch (err) {
      console.log(err);
    }
  };
