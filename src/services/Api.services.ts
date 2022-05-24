import { NetworkManger } from "../network";

export class ApiService {
  static getDetails = (gender: string, nat: string, results = 20) => {
    const inc = "name,email,picture";
    return NetworkManger.getInstance().appRequest({
      method: "get",
      params: { gender, nat, results, inc },
    });
  };
}
