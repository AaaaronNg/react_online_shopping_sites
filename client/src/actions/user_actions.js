import axios from "axios";
import { LOGIN_USER } from "./types";

// on server, there are different url -> different action

import { USER_SERVER } from "../component/utils/misc";

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
